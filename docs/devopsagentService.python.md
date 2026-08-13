# `devopsagentService` Submodule <a name="`devopsagentService` Submodule" id="@cdktn/provider-awscc.devopsagentService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentService <a name="DevopsagentService" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service awscc_devopsagent_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentService(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  service_type: str,
  exchange_url_private_connection_name: str = None,
  kms_key_arn: str = None,
  private_connection_name: str = None,
  service_details: DevopsagentServiceServiceDetails = None,
  tags: IResolvable | typing.List[DevopsagentServiceTags] = None,
  target_url_private_connection_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.serviceType">service_type</a></code> | <code>str</code> | The type of service being registered. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.exchangeUrlPrivateConnectionName">exchange_url_private_connection_name</a></code> | <code>str</code> | The name of the private connection to use for OAuth token exchange requests only. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of the KMS key to use for encryption. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.privateConnectionName">private_connection_name</a></code> | <code>str</code> | The name of the private connection to use for VPC connectivity. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.serviceDetails">service_details</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a></code> | Service-specific configuration details for create operation. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.targetUrlPrivateConnectionName">target_url_private_connection_name</a></code> | <code>str</code> | The name of the private connection to use for API calls (target URL) only. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.serviceType"></a>

- *Type:* str

The type of service being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#service_type DevopsagentService#service_type}

---

##### `exchange_url_private_connection_name`<sup>Optional</sup> <a name="exchange_url_private_connection_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.exchangeUrlPrivateConnectionName"></a>

- *Type:* str

The name of the private connection to use for OAuth token exchange requests only.

Cannot be specified when PrivateConnectionName is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#exchange_url_private_connection_name DevopsagentService#exchange_url_private_connection_name}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#kms_key_arn DevopsagentService#kms_key_arn}

---

##### `private_connection_name`<sup>Optional</sup> <a name="private_connection_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.privateConnectionName"></a>

- *Type:* str

The name of the private connection to use for VPC connectivity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#private_connection_name DevopsagentService#private_connection_name}

---

##### `service_details`<sup>Optional</sup> <a name="service_details" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.serviceDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a>

Service-specific configuration details for create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#service_details DevopsagentService#service_details}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#tags DevopsagentService#tags}

---

##### `target_url_private_connection_name`<sup>Optional</sup> <a name="target_url_private_connection_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.targetUrlPrivateConnectionName"></a>

- *Type:* str

The name of the private connection to use for API calls (target URL) only.

Cannot be specified when PrivateConnectionName is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#target_url_private_connection_name DevopsagentService#target_url_private_connection_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails">put_service_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetExchangeUrlPrivateConnectionName">reset_exchange_url_private_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetPrivateConnectionName">reset_private_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetServiceDetails">reset_service_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetTargetUrlPrivateConnectionName">reset_target_url_private_connection_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_service_details` <a name="put_service_details" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails"></a>

```python
def put_service_details(
  azure_identity: DevopsagentServiceServiceDetailsAzureIdentity = None,
  dynatrace: DevopsagentServiceServiceDetailsDynatrace = None,
  git_lab: DevopsagentServiceServiceDetailsGitLab = None,
  mcp_server: DevopsagentServiceServiceDetailsMcpServer = None,
  mcp_server_grafana: DevopsagentServiceServiceDetailsMcpServerGrafana = None,
  mcp_server_new_relic: DevopsagentServiceServiceDetailsMcpServerNewRelic = None,
  mcp_server_sig_v4: DevopsagentServiceServiceDetailsMcpServerSigV4 = None,
  mcp_server_splunk: DevopsagentServiceServiceDetailsMcpServerSplunk = None,
  pager_duty: DevopsagentServiceServiceDetailsPagerDuty = None,
  service_now: DevopsagentServiceServiceDetailsServiceNow = None
) -> None
```

###### `azure_identity`<sup>Optional</sup> <a name="azure_identity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails.parameter.azureIdentity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a>

Azure Identity service configuration for federated identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#azure_identity DevopsagentService#azure_identity}

---

###### `dynatrace`<sup>Optional</sup> <a name="dynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails.parameter.dynatrace"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a>

Dynatrace service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#dynatrace DevopsagentService#dynatrace}

---

###### `git_lab`<sup>Optional</sup> <a name="git_lab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails.parameter.gitLab"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a>

GitLab service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#git_lab DevopsagentService#git_lab}

---

###### `mcp_server`<sup>Optional</sup> <a name="mcp_server" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails.parameter.mcpServer"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a>

MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#mcp_server DevopsagentService#mcp_server}

---

###### `mcp_server_grafana`<sup>Optional</sup> <a name="mcp_server_grafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails.parameter.mcpServerGrafana"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a>

Grafana MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#mcp_server_grafana DevopsagentService#mcp_server_grafana}

---

###### `mcp_server_new_relic`<sup>Optional</sup> <a name="mcp_server_new_relic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails.parameter.mcpServerNewRelic"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a>

New Relic service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#mcp_server_new_relic DevopsagentService#mcp_server_new_relic}

---

###### `mcp_server_sig_v4`<sup>Optional</sup> <a name="mcp_server_sig_v4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails.parameter.mcpServerSigV4"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a>

SigV4-authenticated MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#mcp_server_sig_v4 DevopsagentService#mcp_server_sig_v4}

---

###### `mcp_server_splunk`<sup>Optional</sup> <a name="mcp_server_splunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails.parameter.mcpServerSplunk"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a>

Splunk MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#mcp_server_splunk DevopsagentService#mcp_server_splunk}

---

###### `pager_duty`<sup>Optional</sup> <a name="pager_duty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails.parameter.pagerDuty"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a>

PagerDuty service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#pager_duty DevopsagentService#pager_duty}

---

###### `service_now`<sup>Optional</sup> <a name="service_now" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails.parameter.serviceNow"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a>

ServiceNow service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#service_now DevopsagentService#service_now}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DevopsagentServiceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>]

---

##### `reset_exchange_url_private_connection_name` <a name="reset_exchange_url_private_connection_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetExchangeUrlPrivateConnectionName"></a>

```python
def reset_exchange_url_private_connection_name() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_private_connection_name` <a name="reset_private_connection_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetPrivateConnectionName"></a>

```python
def reset_private_connection_name() -> None
```

##### `reset_service_details` <a name="reset_service_details" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetServiceDetails"></a>

```python
def reset_service_details() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_url_private_connection_name` <a name="reset_target_url_private_connection_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetTargetUrlPrivateConnectionName"></a>

```python
def reset_target_url_private_connection_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DevopsagentService resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isConstruct"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentService.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformElement"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformResource"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DevopsagentService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DevopsagentService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DevopsagentService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.accessibleResources">accessible_resources</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.additionalServiceDetails">additional_service_details</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference">DevopsagentServiceAdditionalServiceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceDetails">service_details</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference">DevopsagentServiceServiceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList">DevopsagentServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.exchangeUrlPrivateConnectionNameInput">exchange_url_private_connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.privateConnectionNameInput">private_connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceDetailsInput">service_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceTypeInput">service_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.targetUrlPrivateConnectionNameInput">target_url_private_connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.exchangeUrlPrivateConnectionName">exchange_url_private_connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.privateConnectionName">private_connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.targetUrlPrivateConnectionName">target_url_private_connection_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `accessible_resources`<sup>Required</sup> <a name="accessible_resources" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.accessibleResources"></a>

```python
accessible_resources: StringMapList
```

- *Type:* cdktn.StringMapList

---

##### `additional_service_details`<sup>Required</sup> <a name="additional_service_details" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.additionalServiceDetails"></a>

```python
additional_service_details: DevopsagentServiceAdditionalServiceDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference">DevopsagentServiceAdditionalServiceDetailsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_details`<sup>Required</sup> <a name="service_details" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceDetails"></a>

```python
service_details: DevopsagentServiceServiceDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference">DevopsagentServiceServiceDetailsOutputReference</a>

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tags"></a>

```python
tags: DevopsagentServiceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList">DevopsagentServiceTagsList</a>

---

##### `exchange_url_private_connection_name_input`<sup>Optional</sup> <a name="exchange_url_private_connection_name_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.exchangeUrlPrivateConnectionNameInput"></a>

```python
exchange_url_private_connection_name_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `private_connection_name_input`<sup>Optional</sup> <a name="private_connection_name_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.privateConnectionNameInput"></a>

```python
private_connection_name_input: str
```

- *Type:* str

---

##### `service_details_input`<sup>Optional</sup> <a name="service_details_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceDetailsInput"></a>

```python
service_details_input: IResolvable | DevopsagentServiceServiceDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a>

---

##### `service_type_input`<sup>Optional</sup> <a name="service_type_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceTypeInput"></a>

```python
service_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DevopsagentServiceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>]

---

##### `target_url_private_connection_name_input`<sup>Optional</sup> <a name="target_url_private_connection_name_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.targetUrlPrivateConnectionNameInput"></a>

```python
target_url_private_connection_name_input: str
```

- *Type:* str

---

##### `exchange_url_private_connection_name`<sup>Required</sup> <a name="exchange_url_private_connection_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.exchangeUrlPrivateConnectionName"></a>

```python
exchange_url_private_connection_name: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `private_connection_name`<sup>Required</sup> <a name="private_connection_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.privateConnectionName"></a>

```python
private_connection_name: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `target_url_private_connection_name`<sup>Required</sup> <a name="target_url_private_connection_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.targetUrlPrivateConnectionName"></a>

```python
target_url_private_connection_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentServiceAdditionalServiceDetails <a name="DevopsagentServiceAdditionalServiceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetails.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetails()
```


### DevopsagentServiceAdditionalServiceDetailsAzureIdentity <a name="DevopsagentServiceAdditionalServiceDetailsAzureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentity.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentity()
```


### DevopsagentServiceAdditionalServiceDetailsDynatrace <a name="DevopsagentServiceAdditionalServiceDetailsDynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatrace.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatrace()
```


### DevopsagentServiceAdditionalServiceDetailsGitLab <a name="DevopsagentServiceAdditionalServiceDetailsGitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLab.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLab()
```


### DevopsagentServiceAdditionalServiceDetailsMcpServer <a name="DevopsagentServiceAdditionalServiceDetailsMcpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServer.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServer()
```


### DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana()
```


### DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic()
```


### DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4 <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4()
```


### DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk()
```


### DevopsagentServiceAdditionalServiceDetailsPagerDuty <a name="DevopsagentServiceAdditionalServiceDetailsPagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDuty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDuty.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDuty()
```


### DevopsagentServiceAdditionalServiceDetailsServiceNow <a name="DevopsagentServiceAdditionalServiceDetailsServiceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNow.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNow()
```


### DevopsagentServiceConfig <a name="DevopsagentServiceConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  service_type: str,
  exchange_url_private_connection_name: str = None,
  kms_key_arn: str = None,
  private_connection_name: str = None,
  service_details: DevopsagentServiceServiceDetails = None,
  tags: IResolvable | typing.List[DevopsagentServiceTags] = None,
  target_url_private_connection_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.serviceType">service_type</a></code> | <code>str</code> | The type of service being registered. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.exchangeUrlPrivateConnectionName">exchange_url_private_connection_name</a></code> | <code>str</code> | The name of the private connection to use for OAuth token exchange requests only. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of the KMS key to use for encryption. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.privateConnectionName">private_connection_name</a></code> | <code>str</code> | The name of the private connection to use for VPC connectivity. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.serviceDetails">service_details</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a></code> | Service-specific configuration details for create operation. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.targetUrlPrivateConnectionName">target_url_private_connection_name</a></code> | <code>str</code> | The name of the private connection to use for API calls (target URL) only. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

The type of service being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#service_type DevopsagentService#service_type}

---

##### `exchange_url_private_connection_name`<sup>Optional</sup> <a name="exchange_url_private_connection_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.exchangeUrlPrivateConnectionName"></a>

```python
exchange_url_private_connection_name: str
```

- *Type:* str

The name of the private connection to use for OAuth token exchange requests only.

Cannot be specified when PrivateConnectionName is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#exchange_url_private_connection_name DevopsagentService#exchange_url_private_connection_name}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#kms_key_arn DevopsagentService#kms_key_arn}

---

##### `private_connection_name`<sup>Optional</sup> <a name="private_connection_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.privateConnectionName"></a>

```python
private_connection_name: str
```

- *Type:* str

The name of the private connection to use for VPC connectivity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#private_connection_name DevopsagentService#private_connection_name}

---

##### `service_details`<sup>Optional</sup> <a name="service_details" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.serviceDetails"></a>

```python
service_details: DevopsagentServiceServiceDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a>

Service-specific configuration details for create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#service_details DevopsagentService#service_details}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DevopsagentServiceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#tags DevopsagentService#tags}

---

##### `target_url_private_connection_name`<sup>Optional</sup> <a name="target_url_private_connection_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.targetUrlPrivateConnectionName"></a>

```python
target_url_private_connection_name: str
```

- *Type:* str

The name of the private connection to use for API calls (target URL) only.

Cannot be specified when PrivateConnectionName is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#target_url_private_connection_name DevopsagentService#target_url_private_connection_name}

---

### DevopsagentServiceServiceDetails <a name="DevopsagentServiceServiceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetails(
  azure_identity: DevopsagentServiceServiceDetailsAzureIdentity = None,
  dynatrace: DevopsagentServiceServiceDetailsDynatrace = None,
  git_lab: DevopsagentServiceServiceDetailsGitLab = None,
  mcp_server: DevopsagentServiceServiceDetailsMcpServer = None,
  mcp_server_grafana: DevopsagentServiceServiceDetailsMcpServerGrafana = None,
  mcp_server_new_relic: DevopsagentServiceServiceDetailsMcpServerNewRelic = None,
  mcp_server_sig_v4: DevopsagentServiceServiceDetailsMcpServerSigV4 = None,
  mcp_server_splunk: DevopsagentServiceServiceDetailsMcpServerSplunk = None,
  pager_duty: DevopsagentServiceServiceDetailsPagerDuty = None,
  service_now: DevopsagentServiceServiceDetailsServiceNow = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.azureIdentity">azure_identity</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a></code> | Azure Identity service configuration for federated identity. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.dynatrace">dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a></code> | Dynatrace service configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.gitLab">git_lab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a></code> | GitLab service configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServer">mcp_server</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a></code> | MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerGrafana">mcp_server_grafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a></code> | Grafana MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerNewRelic">mcp_server_new_relic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a></code> | New Relic service configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerSigV4">mcp_server_sig_v4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a></code> | SigV4-authenticated MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerSplunk">mcp_server_splunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a></code> | Splunk MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.pagerDuty">pager_duty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a></code> | PagerDuty service configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a></code> | ServiceNow service configuration. |

---

##### `azure_identity`<sup>Optional</sup> <a name="azure_identity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.azureIdentity"></a>

```python
azure_identity: DevopsagentServiceServiceDetailsAzureIdentity
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a>

Azure Identity service configuration for federated identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#azure_identity DevopsagentService#azure_identity}

---

##### `dynatrace`<sup>Optional</sup> <a name="dynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.dynatrace"></a>

```python
dynatrace: DevopsagentServiceServiceDetailsDynatrace
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a>

Dynatrace service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#dynatrace DevopsagentService#dynatrace}

---

##### `git_lab`<sup>Optional</sup> <a name="git_lab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.gitLab"></a>

```python
git_lab: DevopsagentServiceServiceDetailsGitLab
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a>

GitLab service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#git_lab DevopsagentService#git_lab}

---

##### `mcp_server`<sup>Optional</sup> <a name="mcp_server" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServer"></a>

```python
mcp_server: DevopsagentServiceServiceDetailsMcpServer
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a>

MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#mcp_server DevopsagentService#mcp_server}

---

##### `mcp_server_grafana`<sup>Optional</sup> <a name="mcp_server_grafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerGrafana"></a>

```python
mcp_server_grafana: DevopsagentServiceServiceDetailsMcpServerGrafana
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a>

Grafana MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#mcp_server_grafana DevopsagentService#mcp_server_grafana}

---

##### `mcp_server_new_relic`<sup>Optional</sup> <a name="mcp_server_new_relic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerNewRelic"></a>

```python
mcp_server_new_relic: DevopsagentServiceServiceDetailsMcpServerNewRelic
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a>

New Relic service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#mcp_server_new_relic DevopsagentService#mcp_server_new_relic}

---

##### `mcp_server_sig_v4`<sup>Optional</sup> <a name="mcp_server_sig_v4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerSigV4"></a>

```python
mcp_server_sig_v4: DevopsagentServiceServiceDetailsMcpServerSigV4
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a>

SigV4-authenticated MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#mcp_server_sig_v4 DevopsagentService#mcp_server_sig_v4}

---

##### `mcp_server_splunk`<sup>Optional</sup> <a name="mcp_server_splunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerSplunk"></a>

```python
mcp_server_splunk: DevopsagentServiceServiceDetailsMcpServerSplunk
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a>

Splunk MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#mcp_server_splunk DevopsagentService#mcp_server_splunk}

---

##### `pager_duty`<sup>Optional</sup> <a name="pager_duty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.pagerDuty"></a>

```python
pager_duty: DevopsagentServiceServiceDetailsPagerDuty
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a>

PagerDuty service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#pager_duty DevopsagentService#pager_duty}

---

##### `service_now`<sup>Optional</sup> <a name="service_now" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.serviceNow"></a>

```python
service_now: DevopsagentServiceServiceDetailsServiceNow
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a>

ServiceNow service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#service_now DevopsagentService#service_now}

---

### DevopsagentServiceServiceDetailsAzureIdentity <a name="DevopsagentServiceServiceDetailsAzureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity(
  client_id: str = None,
  tenant_id: str = None,
  web_identity_role_arn: str = None,
  web_identity_token_audiences: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.clientId">client_id</a></code> | <code>str</code> | Azure AD application client ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.tenantId">tenant_id</a></code> | <code>str</code> | Azure AD tenant ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.webIdentityRoleArn">web_identity_role_arn</a></code> | <code>str</code> | ARN of the IAM role for web identity token exchange. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.webIdentityTokenAudiences">web_identity_token_audiences</a></code> | <code>typing.List[str]</code> | List of audiences for the web identity token. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Azure AD application client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Azure AD tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#tenant_id DevopsagentService#tenant_id}

---

##### `web_identity_role_arn`<sup>Optional</sup> <a name="web_identity_role_arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.webIdentityRoleArn"></a>

```python
web_identity_role_arn: str
```

- *Type:* str

ARN of the IAM role for web identity token exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#web_identity_role_arn DevopsagentService#web_identity_role_arn}

---

##### `web_identity_token_audiences`<sup>Optional</sup> <a name="web_identity_token_audiences" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.webIdentityTokenAudiences"></a>

```python
web_identity_token_audiences: typing.List[str]
```

- *Type:* typing.List[str]

List of audiences for the web identity token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#web_identity_token_audiences DevopsagentService#web_identity_token_audiences}

---

### DevopsagentServiceServiceDetailsDynatrace <a name="DevopsagentServiceServiceDetailsDynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsDynatrace(
  account_urn: str = None,
  authorization_config: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace.property.accountUrn">account_urn</a></code> | <code>str</code> | Dynatrace resource account URN. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a></code> | Dynatrace OAuth authorization configuration. |

---

##### `account_urn`<sup>Optional</sup> <a name="account_urn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace.property.accountUrn"></a>

```python
account_urn: str
```

- *Type:* str

Dynatrace resource account URN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#account_urn DevopsagentService#account_urn}

---

##### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace.property.authorizationConfig"></a>

```python
authorization_config: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a>

Dynatrace OAuth authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

### DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig <a name="DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig(
  o_auth_client_credentials: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig.property.oAuthClientCredentials">o_auth_client_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a></code> | OAuth client credentials. |

---

##### `o_auth_client_credentials`<sup>Optional</sup> <a name="o_auth_client_credentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig.property.oAuthClientCredentials"></a>

```python
o_auth_client_credentials: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a>

OAuth client credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}

---

### DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials <a name="DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials(
  client_id: str = None,
  client_name: str = None,
  client_secret: str = None,
  exchange_parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientId">client_id</a></code> | <code>str</code> | OAuth client ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientName">client_name</a></code> | <code>str</code> | User friendly OAuth client name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientSecret">client_secret</a></code> | <code>str</code> | OAuth client secret. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.exchangeParameters">exchange_parameters</a></code> | <code>str</code> | OAuth token exchange parameters. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

##### `client_name`<sup>Optional</sup> <a name="client_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientName"></a>

```python
client_name: str
```

- *Type:* str

User friendly OAuth client name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}

---

##### `exchange_parameters`<sup>Optional</sup> <a name="exchange_parameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.exchangeParameters"></a>

```python
exchange_parameters: str
```

- *Type:* str

OAuth token exchange parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}

---

### DevopsagentServiceServiceDetailsGitLab <a name="DevopsagentServiceServiceDetailsGitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsGitLab(
  group_id: str = None,
  target_url: str = None,
  token_type: str = None,
  token_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.groupId">group_id</a></code> | <code>str</code> | Optional GitLab group ID for group-level access tokens. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.targetUrl">target_url</a></code> | <code>str</code> | GitLab instance URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.tokenType">token_type</a></code> | <code>str</code> | Type of GitLab access token. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.tokenValue">token_value</a></code> | <code>str</code> | GitLab access token value. |

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Optional GitLab group ID for group-level access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#group_id DevopsagentService#group_id}

---

##### `target_url`<sup>Optional</sup> <a name="target_url" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.targetUrl"></a>

```python
target_url: str
```

- *Type:* str

GitLab instance URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#target_url DevopsagentService#target_url}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

Type of GitLab access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#token_type DevopsagentService#token_type}

---

##### `token_value`<sup>Optional</sup> <a name="token_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.tokenValue"></a>

```python
token_value: str
```

- *Type:* str

GitLab access token value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}

---

### DevopsagentServiceServiceDetailsMcpServer <a name="DevopsagentServiceServiceDetailsMcpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServer(
  authorization_config: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig = None,
  description: str = None,
  endpoint: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a></code> | MCP server authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.description">description</a></code> | <code>str</code> | Optional description for the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.endpoint">endpoint</a></code> | <code>str</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.name">name</a></code> | <code>str</code> | MCP server name. |

---

##### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.authorizationConfig"></a>

```python
authorization_config: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a>

MCP server authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.description"></a>

```python
description: str
```

- *Type:* str

Optional description for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#description DevopsagentService#description}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.name"></a>

```python
name: str
```

- *Type:* str

MCP server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#name DevopsagentService#name}

---

### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig(
  api_key: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey = None,
  bearer_token: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken = None,
  o_auth_client_credentials: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a></code> | API key authentication details. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.bearerToken">bearer_token</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a></code> | Bearer token authentication details. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.oAuthClientCredentials">o_auth_client_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a></code> | MCP server OAuth client credentials configuration. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.apiKey"></a>

```python
api_key: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a>

API key authentication details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#api_key DevopsagentService#api_key}

---

##### `bearer_token`<sup>Optional</sup> <a name="bearer_token" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.bearerToken"></a>

```python
bearer_token: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a>

Bearer token authentication details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#bearer_token DevopsagentService#bearer_token}

---

##### `o_auth_client_credentials`<sup>Optional</sup> <a name="o_auth_client_credentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.oAuthClientCredentials"></a>

```python
o_auth_client_credentials: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a>

MCP server OAuth client credentials configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}

---

### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey(
  api_key_header: str = None,
  api_key_name: str = None,
  api_key_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyHeader">api_key_header</a></code> | <code>str</code> | HTTP header name to send the API key. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyName">api_key_name</a></code> | <code>str</code> | User friendly API key name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyValue">api_key_value</a></code> | <code>str</code> | API key value. |

---

##### `api_key_header`<sup>Optional</sup> <a name="api_key_header" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyHeader"></a>

```python
api_key_header: str
```

- *Type:* str

HTTP header name to send the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#api_key_header DevopsagentService#api_key_header}

---

##### `api_key_name`<sup>Optional</sup> <a name="api_key_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyName"></a>

```python
api_key_name: str
```

- *Type:* str

User friendly API key name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#api_key_name DevopsagentService#api_key_name}

---

##### `api_key_value`<sup>Optional</sup> <a name="api_key_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyValue"></a>

```python
api_key_value: str
```

- *Type:* str

API key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#api_key_value DevopsagentService#api_key_value}

---

### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken(
  authorization_header: str = None,
  token_name: str = None,
  token_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.authorizationHeader">authorization_header</a></code> | <code>str</code> | HTTP header name to send the bearer token. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.tokenName">token_name</a></code> | <code>str</code> | User friendly bearer token name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.tokenValue">token_value</a></code> | <code>str</code> | Bearer token value. |

---

##### `authorization_header`<sup>Optional</sup> <a name="authorization_header" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.authorizationHeader"></a>

```python
authorization_header: str
```

- *Type:* str

HTTP header name to send the bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_header DevopsagentService#authorization_header}

---

##### `token_name`<sup>Optional</sup> <a name="token_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.tokenName"></a>

```python
token_name: str
```

- *Type:* str

User friendly bearer token name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#token_name DevopsagentService#token_name}

---

##### `token_value`<sup>Optional</sup> <a name="token_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.tokenValue"></a>

```python
token_value: str
```

- *Type:* str

Bearer token value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}

---

### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials(
  client_id: str = None,
  client_name: str = None,
  client_secret: str = None,
  exchange_parameters: str = None,
  exchange_url: str = None,
  scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientId">client_id</a></code> | <code>str</code> | OAuth client ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientName">client_name</a></code> | <code>str</code> | User friendly OAuth client name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientSecret">client_secret</a></code> | <code>str</code> | OAuth client secret. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.exchangeParameters">exchange_parameters</a></code> | <code>str</code> | OAuth token exchange parameters. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.exchangeUrl">exchange_url</a></code> | <code>str</code> | OAuth token exchange URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | OAuth scopes. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

##### `client_name`<sup>Optional</sup> <a name="client_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientName"></a>

```python
client_name: str
```

- *Type:* str

User friendly OAuth client name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}

---

##### `exchange_parameters`<sup>Optional</sup> <a name="exchange_parameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.exchangeParameters"></a>

```python
exchange_parameters: str
```

- *Type:* str

OAuth token exchange parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}

---

##### `exchange_url`<sup>Optional</sup> <a name="exchange_url" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.exchangeUrl"></a>

```python
exchange_url: str
```

- *Type:* str

OAuth token exchange URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#exchange_url DevopsagentService#exchange_url}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

OAuth scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#scopes DevopsagentService#scopes}

---

### DevopsagentServiceServiceDetailsMcpServerGrafana <a name="DevopsagentServiceServiceDetailsMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana(
  authorization_config: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig = None,
  description: str = None,
  endpoint: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a></code> | Grafana MCP server authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.description">description</a></code> | <code>str</code> | Optional description for the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.endpoint">endpoint</a></code> | <code>str</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.name">name</a></code> | <code>str</code> | MCP server name. |

---

##### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.authorizationConfig"></a>

```python
authorization_config: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a>

Grafana MCP server authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.description"></a>

```python
description: str
```

- *Type:* str

Optional description for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#description DevopsagentService#description}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.name"></a>

```python
name: str
```

- *Type:* str

MCP server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#name DevopsagentService#name}

---

### DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig <a name="DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig(
  bearer_token: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig.property.bearerToken">bearer_token</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a></code> | Bearer token authentication details. |

---

##### `bearer_token`<sup>Optional</sup> <a name="bearer_token" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig.property.bearerToken"></a>

```python
bearer_token: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a>

Bearer token authentication details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#bearer_token DevopsagentService#bearer_token}

---

### DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken <a name="DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken(
  authorization_header: str = None,
  token_name: str = None,
  token_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.authorizationHeader">authorization_header</a></code> | <code>str</code> | HTTP header name to send the bearer token. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.tokenName">token_name</a></code> | <code>str</code> | User friendly bearer token name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.tokenValue">token_value</a></code> | <code>str</code> | Bearer token value. |

---

##### `authorization_header`<sup>Optional</sup> <a name="authorization_header" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.authorizationHeader"></a>

```python
authorization_header: str
```

- *Type:* str

HTTP header name to send the bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_header DevopsagentService#authorization_header}

---

##### `token_name`<sup>Optional</sup> <a name="token_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.tokenName"></a>

```python
token_name: str
```

- *Type:* str

User friendly bearer token name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#token_name DevopsagentService#token_name}

---

##### `token_value`<sup>Optional</sup> <a name="token_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.tokenValue"></a>

```python
token_value: str
```

- *Type:* str

Bearer token value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}

---

### DevopsagentServiceServiceDetailsMcpServerNewRelic <a name="DevopsagentServiceServiceDetailsMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic(
  authorization_config: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a></code> | New Relic authorization configuration. |

---

##### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic.property.authorizationConfig"></a>

```python
authorization_config: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a>

New Relic authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

### DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig <a name="DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig(
  api_key: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a></code> | New Relic API key configuration. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig.property.apiKey"></a>

```python
api_key: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a>

New Relic API key configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#api_key DevopsagentService#api_key}

---

### DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey <a name="DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey(
  account_id: str = None,
  alert_policy_ids: typing.List[str] = None,
  api_key: str = None,
  application_ids: typing.List[str] = None,
  entity_guids: typing.List[str] = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.accountId">account_id</a></code> | <code>str</code> | New Relic Account ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.alertPolicyIds">alert_policy_ids</a></code> | <code>typing.List[str]</code> | List of alert policy IDs. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.apiKey">api_key</a></code> | <code>str</code> | New Relic User API Key. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.applicationIds">application_ids</a></code> | <code>typing.List[str]</code> | List of monitored APM application IDs. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.entityGuids">entity_guids</a></code> | <code>typing.List[str]</code> | List of globally unique IDs for New Relic resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.region">region</a></code> | <code>str</code> | New Relic region. |

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

New Relic Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#account_id DevopsagentService#account_id}

---

##### `alert_policy_ids`<sup>Optional</sup> <a name="alert_policy_ids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.alertPolicyIds"></a>

```python
alert_policy_ids: typing.List[str]
```

- *Type:* typing.List[str]

List of alert policy IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#alert_policy_ids DevopsagentService#alert_policy_ids}

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

New Relic User API Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#api_key DevopsagentService#api_key}

---

##### `application_ids`<sup>Optional</sup> <a name="application_ids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.applicationIds"></a>

```python
application_ids: typing.List[str]
```

- *Type:* typing.List[str]

List of monitored APM application IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#application_ids DevopsagentService#application_ids}

---

##### `entity_guids`<sup>Optional</sup> <a name="entity_guids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.entityGuids"></a>

```python
entity_guids: typing.List[str]
```

- *Type:* typing.List[str]

List of globally unique IDs for New Relic resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#entity_guids DevopsagentService#entity_guids}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.region"></a>

```python
region: str
```

- *Type:* str

New Relic region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#region DevopsagentService#region}

---

### DevopsagentServiceServiceDetailsMcpServerSigV4 <a name="DevopsagentServiceServiceDetailsMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4(
  authorization_config: DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig = None,
  description: str = None,
  endpoint: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a></code> | SigV4 authorization configuration for MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.description">description</a></code> | <code>str</code> | Optional description for the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.endpoint">endpoint</a></code> | <code>str</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.name">name</a></code> | <code>str</code> | MCP server name. |

---

##### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.authorizationConfig"></a>

```python
authorization_config: DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a>

SigV4 authorization configuration for MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.description"></a>

```python
description: str
```

- *Type:* str

Optional description for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#description DevopsagentService#description}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.name"></a>

```python
name: str
```

- *Type:* str

MCP server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#name DevopsagentService#name}

---

### DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig <a name="DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig(
  custom_headers: typing.Mapping[str] = None,
  mcp_role_arn: str = None,
  region: str = None,
  role_arn: str = None,
  service: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.customHeaders">custom_headers</a></code> | <code>typing.Mapping[str]</code> | Custom headers for the SigV4 MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.mcpRoleArn">mcp_role_arn</a></code> | <code>str</code> | IAM role ARN to assume for SigV4 signing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.region">region</a></code> | <code>str</code> | AWS region for SigV4 signing. Use '*' for SigV4a multi-region signing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Deprecated - use McpRoleArn instead. IAM role ARN to assume for SigV4 signing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.service">service</a></code> | <code>str</code> | AWS service name for SigV4 signing. |

---

##### `custom_headers`<sup>Optional</sup> <a name="custom_headers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.customHeaders"></a>

```python
custom_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Custom headers for the SigV4 MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#custom_headers DevopsagentService#custom_headers}

---

##### `mcp_role_arn`<sup>Optional</sup> <a name="mcp_role_arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.mcpRoleArn"></a>

```python
mcp_role_arn: str
```

- *Type:* str

IAM role ARN to assume for SigV4 signing.

Optional - when omitted, credentials are resolved at runtime via a monitor account association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#mcp_role_arn DevopsagentService#mcp_role_arn}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

AWS region for SigV4 signing. Use '*' for SigV4a multi-region signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#region DevopsagentService#region}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Deprecated - use McpRoleArn instead. IAM role ARN to assume for SigV4 signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#role_arn DevopsagentService#role_arn}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.service"></a>

```python
service: str
```

- *Type:* str

AWS service name for SigV4 signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#service DevopsagentService#service}

---

### DevopsagentServiceServiceDetailsMcpServerSplunk <a name="DevopsagentServiceServiceDetailsMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk(
  authorization_config: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig = None,
  description: str = None,
  endpoint: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a></code> | MCP server splunk authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.description">description</a></code> | <code>str</code> | Optional description for the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.endpoint">endpoint</a></code> | <code>str</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.name">name</a></code> | <code>str</code> | MCP server name. |

---

##### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.authorizationConfig"></a>

```python
authorization_config: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a>

MCP server splunk authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.description"></a>

```python
description: str
```

- *Type:* str

Optional description for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#description DevopsagentService#description}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.name"></a>

```python
name: str
```

- *Type:* str

MCP server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#name DevopsagentService#name}

---

### DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig <a name="DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig(
  bearer_token: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig.property.bearerToken">bearer_token</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a></code> | Bearer token authentication details. |

---

##### `bearer_token`<sup>Optional</sup> <a name="bearer_token" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig.property.bearerToken"></a>

```python
bearer_token: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a>

Bearer token authentication details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#bearer_token DevopsagentService#bearer_token}

---

### DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken <a name="DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken(
  authorization_header: str = None,
  token_name: str = None,
  token_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.authorizationHeader">authorization_header</a></code> | <code>str</code> | HTTP header name to send the bearer token. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.tokenName">token_name</a></code> | <code>str</code> | User friendly bearer token name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.tokenValue">token_value</a></code> | <code>str</code> | Bearer token value. |

---

##### `authorization_header`<sup>Optional</sup> <a name="authorization_header" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.authorizationHeader"></a>

```python
authorization_header: str
```

- *Type:* str

HTTP header name to send the bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_header DevopsagentService#authorization_header}

---

##### `token_name`<sup>Optional</sup> <a name="token_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.tokenName"></a>

```python
token_name: str
```

- *Type:* str

User friendly bearer token name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#token_name DevopsagentService#token_name}

---

##### `token_value`<sup>Optional</sup> <a name="token_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.tokenValue"></a>

```python
token_value: str
```

- *Type:* str

Bearer token value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}

---

### DevopsagentServiceServiceDetailsPagerDuty <a name="DevopsagentServiceServiceDetailsPagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsPagerDuty(
  authorization_config: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig = None,
  scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a></code> | PagerDuty OAuth authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | PagerDuty scopes. |

---

##### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty.property.authorizationConfig"></a>

```python
authorization_config: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a>

PagerDuty OAuth authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

PagerDuty scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#scopes DevopsagentService#scopes}

---

### DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig <a name="DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig(
  o_auth_client_credentials: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig.property.oAuthClientCredentials">o_auth_client_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a></code> | OAuth client credentials. |

---

##### `o_auth_client_credentials`<sup>Optional</sup> <a name="o_auth_client_credentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig.property.oAuthClientCredentials"></a>

```python
o_auth_client_credentials: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a>

OAuth client credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}

---

### DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials <a name="DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials(
  client_id: str = None,
  client_name: str = None,
  client_secret: str = None,
  exchange_parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientId">client_id</a></code> | <code>str</code> | OAuth client ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientName">client_name</a></code> | <code>str</code> | User friendly OAuth client name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientSecret">client_secret</a></code> | <code>str</code> | OAuth client secret. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.exchangeParameters">exchange_parameters</a></code> | <code>str</code> | OAuth token exchange parameters. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

##### `client_name`<sup>Optional</sup> <a name="client_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientName"></a>

```python
client_name: str
```

- *Type:* str

User friendly OAuth client name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}

---

##### `exchange_parameters`<sup>Optional</sup> <a name="exchange_parameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.exchangeParameters"></a>

```python
exchange_parameters: str
```

- *Type:* str

OAuth token exchange parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}

---

### DevopsagentServiceServiceDetailsServiceNow <a name="DevopsagentServiceServiceDetailsServiceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsServiceNow(
  authorization_config: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig = None,
  instance_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a></code> | ServiceNow OAuth authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow.property.instanceUrl">instance_url</a></code> | <code>str</code> | ServiceNow instance URL. |

---

##### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow.property.authorizationConfig"></a>

```python
authorization_config: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a>

ServiceNow OAuth authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `instance_url`<sup>Optional</sup> <a name="instance_url" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow.property.instanceUrl"></a>

```python
instance_url: str
```

- *Type:* str

ServiceNow instance URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#instance_url DevopsagentService#instance_url}

---

### DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig <a name="DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig(
  o_auth_client_credentials: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig.property.oAuthClientCredentials">o_auth_client_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a></code> | OAuth client credentials. |

---

##### `o_auth_client_credentials`<sup>Optional</sup> <a name="o_auth_client_credentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig.property.oAuthClientCredentials"></a>

```python
o_auth_client_credentials: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a>

OAuth client credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}

---

### DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials <a name="DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials(
  client_id: str = None,
  client_name: str = None,
  client_secret: str = None,
  exchange_parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientId">client_id</a></code> | <code>str</code> | OAuth client ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientName">client_name</a></code> | <code>str</code> | User friendly OAuth client name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientSecret">client_secret</a></code> | <code>str</code> | OAuth client secret. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.exchangeParameters">exchange_parameters</a></code> | <code>str</code> | OAuth token exchange parameters. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

##### `client_name`<sup>Optional</sup> <a name="client_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientName"></a>

```python
client_name: str
```

- *Type:* str

User friendly OAuth client name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}

---

##### `exchange_parameters`<sup>Optional</sup> <a name="exchange_parameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.exchangeParameters"></a>

```python
exchange_parameters: str
```

- *Type:* str

OAuth token exchange parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}

---

### DevopsagentServiceTags <a name="DevopsagentServiceTags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#key DevopsagentService#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#value DevopsagentService#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn">web_identity_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences">web_identity_token_audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentity">DevopsagentServiceAdditionalServiceDetailsAzureIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `web_identity_role_arn`<sup>Required</sup> <a name="web_identity_role_arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn"></a>

```python
web_identity_role_arn: str
```

- *Type:* str

---

##### `web_identity_token_audiences`<sup>Required</sup> <a name="web_identity_token_audiences" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences"></a>

```python
web_identity_token_audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DevopsagentServiceAdditionalServiceDetailsAzureIdentity
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentity">DevopsagentServiceAdditionalServiceDetailsAzureIdentity</a>

---


### DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.accountUrn">account_urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatrace">DevopsagentServiceAdditionalServiceDetailsDynatrace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_urn`<sup>Required</sup> <a name="account_urn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.accountUrn"></a>

```python
account_urn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.internalValue"></a>

```python
internal_value: DevopsagentServiceAdditionalServiceDetailsDynatrace
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatrace">DevopsagentServiceAdditionalServiceDetailsDynatrace</a>

---


### DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.targetUrl">target_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLab">DevopsagentServiceAdditionalServiceDetailsGitLab</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `target_url`<sup>Required</sup> <a name="target_url" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.targetUrl"></a>

```python
target_url: str
```

- *Type:* str

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.internalValue"></a>

```python
internal_value: DevopsagentServiceAdditionalServiceDetailsGitLab
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLab">DevopsagentServiceAdditionalServiceDetailsGitLab</a>

---


### DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.authorizationMethod">authorization_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana">DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_method`<sup>Required</sup> <a name="authorization_method" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.authorizationMethod"></a>

```python
authorization_method: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.internalValue"></a>

```python
internal_value: DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana">DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana</a>

---


### DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic">DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.internalValue"></a>

```python
internal_value: DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic">DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic</a>

---


### DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.apiKeyHeader">api_key_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.authorizationMethod">authorization_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServer">DevopsagentServiceAdditionalServiceDetailsMcpServer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_header`<sup>Required</sup> <a name="api_key_header" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.apiKeyHeader"></a>

```python
api_key_header: str
```

- *Type:* str

---

##### `authorization_method`<sup>Required</sup> <a name="authorization_method" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.authorizationMethod"></a>

```python
authorization_method: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.internalValue"></a>

```python
internal_value: DevopsagentServiceAdditionalServiceDetailsMcpServer
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServer">DevopsagentServiceAdditionalServiceDetailsMcpServer</a>

---


### DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.customHeaders">custom_headers</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.mcpRoleArn">mcp_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4">DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_headers`<sup>Required</sup> <a name="custom_headers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.customHeaders"></a>

```python
custom_headers: StringMap
```

- *Type:* cdktn.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `mcp_role_arn`<sup>Required</sup> <a name="mcp_role_arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.mcpRoleArn"></a>

```python
mcp_role_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.internalValue"></a>

```python
internal_value: DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4">DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4</a>

---


### DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.apiKeyHeader">api_key_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.authorizationMethod">authorization_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk">DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_header`<sup>Required</sup> <a name="api_key_header" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.apiKeyHeader"></a>

```python
api_key_header: str
```

- *Type:* str

---

##### `authorization_method`<sup>Required</sup> <a name="authorization_method" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.authorizationMethod"></a>

```python
authorization_method: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.internalValue"></a>

```python
internal_value: DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk">DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk</a>

---


### DevopsagentServiceAdditionalServiceDetailsOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.azureIdentity">azure_identity</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference">DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.dynatrace">dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference">DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.gitLab">git_lab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference">DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServer">mcp_server</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerGrafana">mcp_server_grafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerNewRelic">mcp_server_new_relic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSigV4">mcp_server_sig_v4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSplunk">mcp_server_splunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.pagerDuty">pager_duty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference">DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference">DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetails">DevopsagentServiceAdditionalServiceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_identity`<sup>Required</sup> <a name="azure_identity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.azureIdentity"></a>

```python
azure_identity: DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference">DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference</a>

---

##### `dynatrace`<sup>Required</sup> <a name="dynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.dynatrace"></a>

```python
dynatrace: DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference">DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference</a>

---

##### `git_lab`<sup>Required</sup> <a name="git_lab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.gitLab"></a>

```python
git_lab: DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference">DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference</a>

---

##### `mcp_server`<sup>Required</sup> <a name="mcp_server" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServer"></a>

```python
mcp_server: DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference</a>

---

##### `mcp_server_grafana`<sup>Required</sup> <a name="mcp_server_grafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerGrafana"></a>

```python
mcp_server_grafana: DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference</a>

---

##### `mcp_server_new_relic`<sup>Required</sup> <a name="mcp_server_new_relic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerNewRelic"></a>

```python
mcp_server_new_relic: DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference</a>

---

##### `mcp_server_sig_v4`<sup>Required</sup> <a name="mcp_server_sig_v4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSigV4"></a>

```python
mcp_server_sig_v4: DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference</a>

---

##### `mcp_server_splunk`<sup>Required</sup> <a name="mcp_server_splunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSplunk"></a>

```python
mcp_server_splunk: DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference</a>

---

##### `pager_duty`<sup>Required</sup> <a name="pager_duty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.pagerDuty"></a>

```python
pager_duty: DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference">DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference</a>

---

##### `service_now`<sup>Required</sup> <a name="service_now" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.serviceNow"></a>

```python
service_now: DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference">DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DevopsagentServiceAdditionalServiceDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetails">DevopsagentServiceAdditionalServiceDetails</a>

---


### DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDuty">DevopsagentServiceAdditionalServiceDetailsPagerDuty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.internalValue"></a>

```python
internal_value: DevopsagentServiceAdditionalServiceDetailsPagerDuty
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDuty">DevopsagentServiceAdditionalServiceDetailsPagerDuty</a>

---


### DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.instanceUrl">instance_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNow">DevopsagentServiceAdditionalServiceDetailsServiceNow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_url`<sup>Required</sup> <a name="instance_url" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.instanceUrl"></a>

```python
instance_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.internalValue"></a>

```python
internal_value: DevopsagentServiceAdditionalServiceDetailsServiceNow
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNow">DevopsagentServiceAdditionalServiceDetailsServiceNow</a>

---


### DevopsagentServiceServiceDetailsAzureIdentityOutputReference <a name="DevopsagentServiceServiceDetailsAzureIdentityOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetWebIdentityRoleArn">reset_web_identity_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetWebIdentityTokenAudiences">reset_web_identity_token_audiences</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_web_identity_role_arn` <a name="reset_web_identity_role_arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetWebIdentityRoleArn"></a>

```python
def reset_web_identity_role_arn() -> None
```

##### `reset_web_identity_token_audiences` <a name="reset_web_identity_token_audiences" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetWebIdentityTokenAudiences"></a>

```python
def reset_web_identity_token_audiences() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArnInput">web_identity_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiencesInput">web_identity_token_audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn">web_identity_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences">web_identity_token_audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `web_identity_role_arn_input`<sup>Optional</sup> <a name="web_identity_role_arn_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArnInput"></a>

```python
web_identity_role_arn_input: str
```

- *Type:* str

---

##### `web_identity_token_audiences_input`<sup>Optional</sup> <a name="web_identity_token_audiences_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiencesInput"></a>

```python
web_identity_token_audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `web_identity_role_arn`<sup>Required</sup> <a name="web_identity_role_arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn"></a>

```python
web_identity_role_arn: str
```

- *Type:* str

---

##### `web_identity_token_audiences`<sup>Required</sup> <a name="web_identity_token_audiences" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences"></a>

```python
web_identity_token_audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsAzureIdentity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a>

---


### DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName">reset_client_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters">reset_exchange_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_name` <a name="reset_client_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName"></a>

```python
def reset_client_name() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_exchange_parameters` <a name="reset_exchange_parameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters"></a>

```python
def reset_exchange_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput">client_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput">exchange_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">client_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">exchange_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_name_input`<sup>Optional</sup> <a name="client_name_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput"></a>

```python
client_name_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `exchange_parameters_input`<sup>Optional</sup> <a name="exchange_parameters_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput"></a>

```python
exchange_parameters_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_name`<sup>Required</sup> <a name="client_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```python
client_name: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `exchange_parameters`<sup>Required</sup> <a name="exchange_parameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```python
exchange_parameters: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a>

---


### DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.putOAuthClientCredentials">put_o_auth_client_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resetOAuthClientCredentials">reset_o_auth_client_credentials</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_o_auth_client_credentials` <a name="put_o_auth_client_credentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.putOAuthClientCredentials"></a>

```python
def put_o_auth_client_credentials(
  client_id: str = None,
  client_name: str = None,
  client_secret: str = None,
  exchange_parameters: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.clientId"></a>

- *Type:* str

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

###### `client_name`<sup>Optional</sup> <a name="client_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.clientName"></a>

- *Type:* str

User friendly OAuth client name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.clientSecret"></a>

- *Type:* str

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}

---

###### `exchange_parameters`<sup>Optional</sup> <a name="exchange_parameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.exchangeParameters"></a>

- *Type:* str

OAuth token exchange parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}

---

##### `reset_o_auth_client_credentials` <a name="reset_o_auth_client_credentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resetOAuthClientCredentials"></a>

```python
def reset_o_auth_client_credentials() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.oAuthClientCredentials">o_auth_client_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput">o_auth_client_credentials_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `o_auth_client_credentials`<sup>Required</sup> <a name="o_auth_client_credentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```python
o_auth_client_credentials: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `o_auth_client_credentials_input`<sup>Optional</sup> <a name="o_auth_client_credentials_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput"></a>

```python
o_auth_client_credentials_input: IResolvable | DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsDynatraceOutputReference <a name="DevopsagentServiceServiceDetailsDynatraceOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.putAuthorizationConfig">put_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resetAccountUrn">reset_account_urn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resetAuthorizationConfig">reset_authorization_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorization_config` <a name="put_authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.putAuthorizationConfig"></a>

```python
def put_authorization_config(
  o_auth_client_credentials: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials = None
) -> None
```

###### `o_auth_client_credentials`<sup>Optional</sup> <a name="o_auth_client_credentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.putAuthorizationConfig.parameter.oAuthClientCredentials"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a>

OAuth client credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}

---

##### `reset_account_urn` <a name="reset_account_urn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resetAccountUrn"></a>

```python
def reset_account_urn() -> None
```

##### `reset_authorization_config` <a name="reset_authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resetAuthorizationConfig"></a>

```python
def reset_authorization_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.accountUrnInput">account_urn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.authorizationConfigInput">authorization_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.accountUrn">account_urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.authorizationConfig"></a>

```python
authorization_config: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference</a>

---

##### `account_urn_input`<sup>Optional</sup> <a name="account_urn_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.accountUrnInput"></a>

```python
account_urn_input: str
```

- *Type:* str

---

##### `authorization_config_input`<sup>Optional</sup> <a name="authorization_config_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.authorizationConfigInput"></a>

```python
authorization_config_input: IResolvable | DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a>

---

##### `account_urn`<sup>Required</sup> <a name="account_urn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.accountUrn"></a>

```python
account_urn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsDynatrace
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a>

---


### DevopsagentServiceServiceDetailsGitLabOutputReference <a name="DevopsagentServiceServiceDetailsGitLabOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTargetUrl">reset_target_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTokenType">reset_token_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTokenValue">reset_token_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_id` <a name="reset_group_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_target_url` <a name="reset_target_url" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTargetUrl"></a>

```python
def reset_target_url() -> None
```

##### `reset_token_type` <a name="reset_token_type" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTokenType"></a>

```python
def reset_token_type() -> None
```

##### `reset_token_value` <a name="reset_token_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTokenValue"></a>

```python
def reset_token_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.targetUrlInput">target_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenTypeInput">token_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenValueInput">token_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.targetUrl">target_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenValue">token_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `target_url_input`<sup>Optional</sup> <a name="target_url_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.targetUrlInput"></a>

```python
target_url_input: str
```

- *Type:* str

---

##### `token_type_input`<sup>Optional</sup> <a name="token_type_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenTypeInput"></a>

```python
token_type_input: str
```

- *Type:* str

---

##### `token_value_input`<sup>Optional</sup> <a name="token_value_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenValueInput"></a>

```python
token_value_input: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `target_url`<sup>Required</sup> <a name="target_url" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.targetUrl"></a>

```python
target_url: str
```

- *Type:* str

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

##### `token_value`<sup>Required</sup> <a name="token_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenValue"></a>

```python
token_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsGitLab
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a>

---


### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyHeader">reset_api_key_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyName">reset_api_key_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyValue">reset_api_key_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_key_header` <a name="reset_api_key_header" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyHeader"></a>

```python
def reset_api_key_header() -> None
```

##### `reset_api_key_name` <a name="reset_api_key_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyName"></a>

```python
def reset_api_key_name() -> None
```

##### `reset_api_key_value` <a name="reset_api_key_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyValue"></a>

```python
def reset_api_key_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyHeaderInput">api_key_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyNameInput">api_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyValueInput">api_key_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyHeader">api_key_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyName">api_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyValue">api_key_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_header_input`<sup>Optional</sup> <a name="api_key_header_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyHeaderInput"></a>

```python
api_key_header_input: str
```

- *Type:* str

---

##### `api_key_name_input`<sup>Optional</sup> <a name="api_key_name_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyNameInput"></a>

```python
api_key_name_input: str
```

- *Type:* str

---

##### `api_key_value_input`<sup>Optional</sup> <a name="api_key_value_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyValueInput"></a>

```python
api_key_value_input: str
```

- *Type:* str

---

##### `api_key_header`<sup>Required</sup> <a name="api_key_header" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyHeader"></a>

```python
api_key_header: str
```

- *Type:* str

---

##### `api_key_name`<sup>Required</sup> <a name="api_key_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyName"></a>

```python
api_key_name: str
```

- *Type:* str

---

##### `api_key_value`<sup>Required</sup> <a name="api_key_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyValue"></a>

```python
api_key_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a>

---


### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader">reset_authorization_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetTokenName">reset_token_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetTokenValue">reset_token_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorization_header` <a name="reset_authorization_header" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader"></a>

```python
def reset_authorization_header() -> None
```

##### `reset_token_name` <a name="reset_token_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetTokenName"></a>

```python
def reset_token_name() -> None
```

##### `reset_token_value` <a name="reset_token_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetTokenValue"></a>

```python
def reset_token_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput">authorization_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput">token_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput">token_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader">authorization_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenName">token_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenValue">token_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_header_input`<sup>Optional</sup> <a name="authorization_header_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput"></a>

```python
authorization_header_input: str
```

- *Type:* str

---

##### `token_name_input`<sup>Optional</sup> <a name="token_name_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput"></a>

```python
token_name_input: str
```

- *Type:* str

---

##### `token_value_input`<sup>Optional</sup> <a name="token_value_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput"></a>

```python
token_value_input: str
```

- *Type:* str

---

##### `authorization_header`<sup>Required</sup> <a name="authorization_header" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader"></a>

```python
authorization_header: str
```

- *Type:* str

---

##### `token_name`<sup>Required</sup> <a name="token_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenName"></a>

```python
token_name: str
```

- *Type:* str

---

##### `token_value`<sup>Required</sup> <a name="token_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenValue"></a>

```python
token_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a>

---


### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName">reset_client_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters">reset_exchange_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeUrl">reset_exchange_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_name` <a name="reset_client_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName"></a>

```python
def reset_client_name() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_exchange_parameters` <a name="reset_exchange_parameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters"></a>

```python
def reset_exchange_parameters() -> None
```

##### `reset_exchange_url` <a name="reset_exchange_url" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeUrl"></a>

```python
def reset_exchange_url() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput">client_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput">exchange_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeUrlInput">exchange_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">client_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">exchange_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeUrl">exchange_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_name_input`<sup>Optional</sup> <a name="client_name_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput"></a>

```python
client_name_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `exchange_parameters_input`<sup>Optional</sup> <a name="exchange_parameters_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput"></a>

```python
exchange_parameters_input: str
```

- *Type:* str

---

##### `exchange_url_input`<sup>Optional</sup> <a name="exchange_url_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeUrlInput"></a>

```python
exchange_url_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_name`<sup>Required</sup> <a name="client_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```python
client_name: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `exchange_parameters`<sup>Required</sup> <a name="exchange_parameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```python
exchange_parameters: str
```

- *Type:* str

---

##### `exchange_url`<sup>Required</sup> <a name="exchange_url" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeUrl"></a>

```python
exchange_url: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a>

---


### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putApiKey">put_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putBearerToken">put_bearer_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putOAuthClientCredentials">put_o_auth_client_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetBearerToken">reset_bearer_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetOAuthClientCredentials">reset_o_auth_client_credentials</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key` <a name="put_api_key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putApiKey"></a>

```python
def put_api_key(
  api_key_header: str = None,
  api_key_name: str = None,
  api_key_value: str = None
) -> None
```

###### `api_key_header`<sup>Optional</sup> <a name="api_key_header" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putApiKey.parameter.apiKeyHeader"></a>

- *Type:* str

HTTP header name to send the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#api_key_header DevopsagentService#api_key_header}

---

###### `api_key_name`<sup>Optional</sup> <a name="api_key_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putApiKey.parameter.apiKeyName"></a>

- *Type:* str

User friendly API key name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#api_key_name DevopsagentService#api_key_name}

---

###### `api_key_value`<sup>Optional</sup> <a name="api_key_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putApiKey.parameter.apiKeyValue"></a>

- *Type:* str

API key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#api_key_value DevopsagentService#api_key_value}

---

##### `put_bearer_token` <a name="put_bearer_token" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putBearerToken"></a>

```python
def put_bearer_token(
  authorization_header: str = None,
  token_name: str = None,
  token_value: str = None
) -> None
```

###### `authorization_header`<sup>Optional</sup> <a name="authorization_header" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putBearerToken.parameter.authorizationHeader"></a>

- *Type:* str

HTTP header name to send the bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_header DevopsagentService#authorization_header}

---

###### `token_name`<sup>Optional</sup> <a name="token_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putBearerToken.parameter.tokenName"></a>

- *Type:* str

User friendly bearer token name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#token_name DevopsagentService#token_name}

---

###### `token_value`<sup>Optional</sup> <a name="token_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putBearerToken.parameter.tokenValue"></a>

- *Type:* str

Bearer token value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}

---

##### `put_o_auth_client_credentials` <a name="put_o_auth_client_credentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putOAuthClientCredentials"></a>

```python
def put_o_auth_client_credentials(
  client_id: str = None,
  client_name: str = None,
  client_secret: str = None,
  exchange_parameters: str = None,
  exchange_url: str = None,
  scopes: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.clientId"></a>

- *Type:* str

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

###### `client_name`<sup>Optional</sup> <a name="client_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.clientName"></a>

- *Type:* str

User friendly OAuth client name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.clientSecret"></a>

- *Type:* str

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}

---

###### `exchange_parameters`<sup>Optional</sup> <a name="exchange_parameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.exchangeParameters"></a>

- *Type:* str

OAuth token exchange parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}

---

###### `exchange_url`<sup>Optional</sup> <a name="exchange_url" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.exchangeUrl"></a>

- *Type:* str

OAuth token exchange URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#exchange_url DevopsagentService#exchange_url}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.scopes"></a>

- *Type:* typing.List[str]

OAuth scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#scopes DevopsagentService#scopes}

---

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_bearer_token` <a name="reset_bearer_token" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetBearerToken"></a>

```python
def reset_bearer_token() -> None
```

##### `reset_o_auth_client_credentials` <a name="reset_o_auth_client_credentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetOAuthClientCredentials"></a>

```python
def reset_o_auth_client_credentials() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.bearerToken">bearer_token</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.oAuthClientCredentials">o_auth_client_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.bearerTokenInput">bearer_token_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput">o_auth_client_credentials_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.apiKey"></a>

```python
api_key: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference</a>

---

##### `bearer_token`<sup>Required</sup> <a name="bearer_token" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.bearerToken"></a>

```python
bearer_token: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference</a>

---

##### `o_auth_client_credentials`<sup>Required</sup> <a name="o_auth_client_credentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```python
o_auth_client_credentials: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.apiKeyInput"></a>

```python
api_key_input: IResolvable | DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a>

---

##### `bearer_token_input`<sup>Optional</sup> <a name="bearer_token_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.bearerTokenInput"></a>

```python
bearer_token_input: IResolvable | DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a>

---

##### `o_auth_client_credentials_input`<sup>Optional</sup> <a name="o_auth_client_credentials_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput"></a>

```python
o_auth_client_credentials_input: IResolvable | DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader">reset_authorization_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetTokenName">reset_token_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetTokenValue">reset_token_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorization_header` <a name="reset_authorization_header" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader"></a>

```python
def reset_authorization_header() -> None
```

##### `reset_token_name` <a name="reset_token_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetTokenName"></a>

```python
def reset_token_name() -> None
```

##### `reset_token_value` <a name="reset_token_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetTokenValue"></a>

```python
def reset_token_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput">authorization_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput">token_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput">token_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader">authorization_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenName">token_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenValue">token_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_header_input`<sup>Optional</sup> <a name="authorization_header_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput"></a>

```python
authorization_header_input: str
```

- *Type:* str

---

##### `token_name_input`<sup>Optional</sup> <a name="token_name_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput"></a>

```python
token_name_input: str
```

- *Type:* str

---

##### `token_value_input`<sup>Optional</sup> <a name="token_value_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput"></a>

```python
token_value_input: str
```

- *Type:* str

---

##### `authorization_header`<sup>Required</sup> <a name="authorization_header" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader"></a>

```python
authorization_header: str
```

- *Type:* str

---

##### `token_name`<sup>Required</sup> <a name="token_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenName"></a>

```python
token_name: str
```

- *Type:* str

---

##### `token_value`<sup>Required</sup> <a name="token_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenValue"></a>

```python
token_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a>

---


### DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.putBearerToken">put_bearer_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resetBearerToken">reset_bearer_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bearer_token` <a name="put_bearer_token" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.putBearerToken"></a>

```python
def put_bearer_token(
  authorization_header: str = None,
  token_name: str = None,
  token_value: str = None
) -> None
```

###### `authorization_header`<sup>Optional</sup> <a name="authorization_header" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.putBearerToken.parameter.authorizationHeader"></a>

- *Type:* str

HTTP header name to send the bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_header DevopsagentService#authorization_header}

---

###### `token_name`<sup>Optional</sup> <a name="token_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.putBearerToken.parameter.tokenName"></a>

- *Type:* str

User friendly bearer token name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#token_name DevopsagentService#token_name}

---

###### `token_value`<sup>Optional</sup> <a name="token_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.putBearerToken.parameter.tokenValue"></a>

- *Type:* str

Bearer token value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}

---

##### `reset_bearer_token` <a name="reset_bearer_token" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resetBearerToken"></a>

```python
def reset_bearer_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.bearerToken">bearer_token</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.bearerTokenInput">bearer_token_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bearer_token`<sup>Required</sup> <a name="bearer_token" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.bearerToken"></a>

```python
bearer_token: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference</a>

---

##### `bearer_token_input`<sup>Optional</sup> <a name="bearer_token_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.bearerTokenInput"></a>

```python
bearer_token_input: IResolvable | DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.putAuthorizationConfig">put_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetAuthorizationConfig">reset_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorization_config` <a name="put_authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.putAuthorizationConfig"></a>

```python
def put_authorization_config(
  bearer_token: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken = None
) -> None
```

###### `bearer_token`<sup>Optional</sup> <a name="bearer_token" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.putAuthorizationConfig.parameter.bearerToken"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a>

Bearer token authentication details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#bearer_token DevopsagentService#bearer_token}

---

##### `reset_authorization_config` <a name="reset_authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetAuthorizationConfig"></a>

```python
def reset_authorization_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.authorizationConfigInput">authorization_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.authorizationConfig"></a>

```python
authorization_config: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference</a>

---

##### `authorization_config_input`<sup>Optional</sup> <a name="authorization_config_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.authorizationConfigInput"></a>

```python
authorization_config_input: IResolvable | DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsMcpServerGrafana
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a>

---


### DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetAlertPolicyIds">reset_alert_policy_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetApplicationIds">reset_application_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetEntityGuids">reset_entity_guids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_alert_policy_ids` <a name="reset_alert_policy_ids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetAlertPolicyIds"></a>

```python
def reset_alert_policy_ids() -> None
```

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_application_ids` <a name="reset_application_ids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetApplicationIds"></a>

```python
def reset_application_ids() -> None
```

##### `reset_entity_guids` <a name="reset_entity_guids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetEntityGuids"></a>

```python
def reset_entity_guids() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.alertPolicyIdsInput">alert_policy_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.applicationIdsInput">application_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.entityGuidsInput">entity_guids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.alertPolicyIds">alert_policy_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.applicationIds">application_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.entityGuids">entity_guids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `alert_policy_ids_input`<sup>Optional</sup> <a name="alert_policy_ids_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.alertPolicyIdsInput"></a>

```python
alert_policy_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `application_ids_input`<sup>Optional</sup> <a name="application_ids_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.applicationIdsInput"></a>

```python
application_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entity_guids_input`<sup>Optional</sup> <a name="entity_guids_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.entityGuidsInput"></a>

```python
entity_guids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `alert_policy_ids`<sup>Required</sup> <a name="alert_policy_ids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.alertPolicyIds"></a>

```python
alert_policy_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `application_ids`<sup>Required</sup> <a name="application_ids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.applicationIds"></a>

```python
application_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entity_guids`<sup>Required</sup> <a name="entity_guids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.entityGuids"></a>

```python
entity_guids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a>

---


### DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.putApiKey">put_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key` <a name="put_api_key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.putApiKey"></a>

```python
def put_api_key(
  account_id: str = None,
  alert_policy_ids: typing.List[str] = None,
  api_key: str = None,
  application_ids: typing.List[str] = None,
  entity_guids: typing.List[str] = None,
  region: str = None
) -> None
```

###### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.putApiKey.parameter.accountId"></a>

- *Type:* str

New Relic Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#account_id DevopsagentService#account_id}

---

###### `alert_policy_ids`<sup>Optional</sup> <a name="alert_policy_ids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.putApiKey.parameter.alertPolicyIds"></a>

- *Type:* typing.List[str]

List of alert policy IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#alert_policy_ids DevopsagentService#alert_policy_ids}

---

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.putApiKey.parameter.apiKey"></a>

- *Type:* str

New Relic User API Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#api_key DevopsagentService#api_key}

---

###### `application_ids`<sup>Optional</sup> <a name="application_ids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.putApiKey.parameter.applicationIds"></a>

- *Type:* typing.List[str]

List of monitored APM application IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#application_ids DevopsagentService#application_ids}

---

###### `entity_guids`<sup>Optional</sup> <a name="entity_guids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.putApiKey.parameter.entityGuids"></a>

- *Type:* typing.List[str]

List of globally unique IDs for New Relic resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#entity_guids DevopsagentService#entity_guids}

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.putApiKey.parameter.region"></a>

- *Type:* str

New Relic region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#region DevopsagentService#region}

---

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.apiKey"></a>

```python
api_key: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference</a>

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.apiKeyInput"></a>

```python
api_key_input: IResolvable | DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.putAuthorizationConfig">put_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resetAuthorizationConfig">reset_authorization_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorization_config` <a name="put_authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.putAuthorizationConfig"></a>

```python
def put_authorization_config(
  api_key: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.putAuthorizationConfig.parameter.apiKey"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a>

New Relic API key configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#api_key DevopsagentService#api_key}

---

##### `reset_authorization_config` <a name="reset_authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resetAuthorizationConfig"></a>

```python
def reset_authorization_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.authorizationConfigInput">authorization_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.authorizationConfig"></a>

```python
authorization_config: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference</a>

---

##### `authorization_config_input`<sup>Optional</sup> <a name="authorization_config_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.authorizationConfigInput"></a>

```python
authorization_config_input: IResolvable | DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsMcpServerNewRelic
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a>

---


### DevopsagentServiceServiceDetailsMcpServerOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.putAuthorizationConfig">put_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetAuthorizationConfig">reset_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorization_config` <a name="put_authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.putAuthorizationConfig"></a>

```python
def put_authorization_config(
  api_key: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey = None,
  bearer_token: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken = None,
  o_auth_client_credentials: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.putAuthorizationConfig.parameter.apiKey"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a>

API key authentication details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#api_key DevopsagentService#api_key}

---

###### `bearer_token`<sup>Optional</sup> <a name="bearer_token" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.putAuthorizationConfig.parameter.bearerToken"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a>

Bearer token authentication details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#bearer_token DevopsagentService#bearer_token}

---

###### `o_auth_client_credentials`<sup>Optional</sup> <a name="o_auth_client_credentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.putAuthorizationConfig.parameter.oAuthClientCredentials"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a>

MCP server OAuth client credentials configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}

---

##### `reset_authorization_config` <a name="reset_authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetAuthorizationConfig"></a>

```python
def reset_authorization_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.authorizationConfigInput">authorization_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.authorizationConfig"></a>

```python
authorization_config: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference</a>

---

##### `authorization_config_input`<sup>Optional</sup> <a name="authorization_config_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.authorizationConfigInput"></a>

```python
authorization_config_input: IResolvable | DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsMcpServer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a>

---


### DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetCustomHeaders">reset_custom_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetMcpRoleArn">reset_mcp_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetService">reset_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_headers` <a name="reset_custom_headers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetCustomHeaders"></a>

```python
def reset_custom_headers() -> None
```

##### `reset_mcp_role_arn` <a name="reset_mcp_role_arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetMcpRoleArn"></a>

```python
def reset_mcp_role_arn() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetService"></a>

```python
def reset_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.customHeadersInput">custom_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.mcpRoleArnInput">mcp_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.customHeaders">custom_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.mcpRoleArn">mcp_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_headers_input`<sup>Optional</sup> <a name="custom_headers_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.customHeadersInput"></a>

```python
custom_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mcp_role_arn_input`<sup>Optional</sup> <a name="mcp_role_arn_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.mcpRoleArnInput"></a>

```python
mcp_role_arn_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `custom_headers`<sup>Required</sup> <a name="custom_headers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.customHeaders"></a>

```python
custom_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mcp_role_arn`<sup>Required</sup> <a name="mcp_role_arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.mcpRoleArn"></a>

```python
mcp_role_arn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference <a name="DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.putAuthorizationConfig">put_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetAuthorizationConfig">reset_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorization_config` <a name="put_authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.putAuthorizationConfig"></a>

```python
def put_authorization_config(
  custom_headers: typing.Mapping[str] = None,
  mcp_role_arn: str = None,
  region: str = None,
  role_arn: str = None,
  service: str = None
) -> None
```

###### `custom_headers`<sup>Optional</sup> <a name="custom_headers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.putAuthorizationConfig.parameter.customHeaders"></a>

- *Type:* typing.Mapping[str]

Custom headers for the SigV4 MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#custom_headers DevopsagentService#custom_headers}

---

###### `mcp_role_arn`<sup>Optional</sup> <a name="mcp_role_arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.putAuthorizationConfig.parameter.mcpRoleArn"></a>

- *Type:* str

IAM role ARN to assume for SigV4 signing.

Optional - when omitted, credentials are resolved at runtime via a monitor account association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#mcp_role_arn DevopsagentService#mcp_role_arn}

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.putAuthorizationConfig.parameter.region"></a>

- *Type:* str

AWS region for SigV4 signing. Use '*' for SigV4a multi-region signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#region DevopsagentService#region}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.putAuthorizationConfig.parameter.roleArn"></a>

- *Type:* str

Deprecated - use McpRoleArn instead. IAM role ARN to assume for SigV4 signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#role_arn DevopsagentService#role_arn}

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.putAuthorizationConfig.parameter.service"></a>

- *Type:* str

AWS service name for SigV4 signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#service DevopsagentService#service}

---

##### `reset_authorization_config` <a name="reset_authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetAuthorizationConfig"></a>

```python
def reset_authorization_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.authorizationConfigInput">authorization_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.authorizationConfig"></a>

```python
authorization_config: DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference</a>

---

##### `authorization_config_input`<sup>Optional</sup> <a name="authorization_config_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.authorizationConfigInput"></a>

```python
authorization_config_input: IResolvable | DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsMcpServerSigV4
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a>

---


### DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader">reset_authorization_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetTokenName">reset_token_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetTokenValue">reset_token_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorization_header` <a name="reset_authorization_header" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader"></a>

```python
def reset_authorization_header() -> None
```

##### `reset_token_name` <a name="reset_token_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetTokenName"></a>

```python
def reset_token_name() -> None
```

##### `reset_token_value` <a name="reset_token_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetTokenValue"></a>

```python
def reset_token_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput">authorization_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput">token_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput">token_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader">authorization_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenName">token_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenValue">token_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_header_input`<sup>Optional</sup> <a name="authorization_header_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput"></a>

```python
authorization_header_input: str
```

- *Type:* str

---

##### `token_name_input`<sup>Optional</sup> <a name="token_name_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput"></a>

```python
token_name_input: str
```

- *Type:* str

---

##### `token_value_input`<sup>Optional</sup> <a name="token_value_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput"></a>

```python
token_value_input: str
```

- *Type:* str

---

##### `authorization_header`<sup>Required</sup> <a name="authorization_header" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader"></a>

```python
authorization_header: str
```

- *Type:* str

---

##### `token_name`<sup>Required</sup> <a name="token_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenName"></a>

```python
token_name: str
```

- *Type:* str

---

##### `token_value`<sup>Required</sup> <a name="token_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenValue"></a>

```python
token_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a>

---


### DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.putBearerToken">put_bearer_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resetBearerToken">reset_bearer_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bearer_token` <a name="put_bearer_token" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.putBearerToken"></a>

```python
def put_bearer_token(
  authorization_header: str = None,
  token_name: str = None,
  token_value: str = None
) -> None
```

###### `authorization_header`<sup>Optional</sup> <a name="authorization_header" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.putBearerToken.parameter.authorizationHeader"></a>

- *Type:* str

HTTP header name to send the bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_header DevopsagentService#authorization_header}

---

###### `token_name`<sup>Optional</sup> <a name="token_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.putBearerToken.parameter.tokenName"></a>

- *Type:* str

User friendly bearer token name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#token_name DevopsagentService#token_name}

---

###### `token_value`<sup>Optional</sup> <a name="token_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.putBearerToken.parameter.tokenValue"></a>

- *Type:* str

Bearer token value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}

---

##### `reset_bearer_token` <a name="reset_bearer_token" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resetBearerToken"></a>

```python
def reset_bearer_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.bearerToken">bearer_token</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.bearerTokenInput">bearer_token_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bearer_token`<sup>Required</sup> <a name="bearer_token" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.bearerToken"></a>

```python
bearer_token: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference</a>

---

##### `bearer_token_input`<sup>Optional</sup> <a name="bearer_token_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.bearerTokenInput"></a>

```python
bearer_token_input: IResolvable | DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.putAuthorizationConfig">put_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetAuthorizationConfig">reset_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorization_config` <a name="put_authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.putAuthorizationConfig"></a>

```python
def put_authorization_config(
  bearer_token: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken = None
) -> None
```

###### `bearer_token`<sup>Optional</sup> <a name="bearer_token" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.putAuthorizationConfig.parameter.bearerToken"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a>

Bearer token authentication details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#bearer_token DevopsagentService#bearer_token}

---

##### `reset_authorization_config` <a name="reset_authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetAuthorizationConfig"></a>

```python
def reset_authorization_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.authorizationConfigInput">authorization_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.authorizationConfig"></a>

```python
authorization_config: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference</a>

---

##### `authorization_config_input`<sup>Optional</sup> <a name="authorization_config_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.authorizationConfigInput"></a>

```python
authorization_config_input: IResolvable | DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsMcpServerSplunk
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a>

---


### DevopsagentServiceServiceDetailsOutputReference <a name="DevopsagentServiceServiceDetailsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putAzureIdentity">put_azure_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putDynatrace">put_dynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putGitLab">put_git_lab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServer">put_mcp_server</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerGrafana">put_mcp_server_grafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerNewRelic">put_mcp_server_new_relic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSigV4">put_mcp_server_sig_v4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSplunk">put_mcp_server_splunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putPagerDuty">put_pager_duty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putServiceNow">put_service_now</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetAzureIdentity">reset_azure_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetDynatrace">reset_dynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetGitLab">reset_git_lab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServer">reset_mcp_server</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerGrafana">reset_mcp_server_grafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerNewRelic">reset_mcp_server_new_relic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerSigV4">reset_mcp_server_sig_v4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerSplunk">reset_mcp_server_splunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetPagerDuty">reset_pager_duty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetServiceNow">reset_service_now</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_azure_identity` <a name="put_azure_identity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putAzureIdentity"></a>

```python
def put_azure_identity(
  client_id: str = None,
  tenant_id: str = None,
  web_identity_role_arn: str = None,
  web_identity_token_audiences: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putAzureIdentity.parameter.clientId"></a>

- *Type:* str

Azure AD application client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

###### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putAzureIdentity.parameter.tenantId"></a>

- *Type:* str

Azure AD tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#tenant_id DevopsagentService#tenant_id}

---

###### `web_identity_role_arn`<sup>Optional</sup> <a name="web_identity_role_arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putAzureIdentity.parameter.webIdentityRoleArn"></a>

- *Type:* str

ARN of the IAM role for web identity token exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#web_identity_role_arn DevopsagentService#web_identity_role_arn}

---

###### `web_identity_token_audiences`<sup>Optional</sup> <a name="web_identity_token_audiences" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putAzureIdentity.parameter.webIdentityTokenAudiences"></a>

- *Type:* typing.List[str]

List of audiences for the web identity token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#web_identity_token_audiences DevopsagentService#web_identity_token_audiences}

---

##### `put_dynatrace` <a name="put_dynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putDynatrace"></a>

```python
def put_dynatrace(
  account_urn: str = None,
  authorization_config: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig = None
) -> None
```

###### `account_urn`<sup>Optional</sup> <a name="account_urn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putDynatrace.parameter.accountUrn"></a>

- *Type:* str

Dynatrace resource account URN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#account_urn DevopsagentService#account_urn}

---

###### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putDynatrace.parameter.authorizationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a>

Dynatrace OAuth authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `put_git_lab` <a name="put_git_lab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putGitLab"></a>

```python
def put_git_lab(
  group_id: str = None,
  target_url: str = None,
  token_type: str = None,
  token_value: str = None
) -> None
```

###### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putGitLab.parameter.groupId"></a>

- *Type:* str

Optional GitLab group ID for group-level access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#group_id DevopsagentService#group_id}

---

###### `target_url`<sup>Optional</sup> <a name="target_url" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putGitLab.parameter.targetUrl"></a>

- *Type:* str

GitLab instance URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#target_url DevopsagentService#target_url}

---

###### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putGitLab.parameter.tokenType"></a>

- *Type:* str

Type of GitLab access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#token_type DevopsagentService#token_type}

---

###### `token_value`<sup>Optional</sup> <a name="token_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putGitLab.parameter.tokenValue"></a>

- *Type:* str

GitLab access token value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}

---

##### `put_mcp_server` <a name="put_mcp_server" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServer"></a>

```python
def put_mcp_server(
  authorization_config: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig = None,
  description: str = None,
  endpoint: str = None,
  name: str = None
) -> None
```

###### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServer.parameter.authorizationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a>

MCP server authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServer.parameter.description"></a>

- *Type:* str

Optional description for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#description DevopsagentService#description}

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServer.parameter.endpoint"></a>

- *Type:* str

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServer.parameter.name"></a>

- *Type:* str

MCP server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#name DevopsagentService#name}

---

##### `put_mcp_server_grafana` <a name="put_mcp_server_grafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerGrafana"></a>

```python
def put_mcp_server_grafana(
  authorization_config: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig = None,
  description: str = None,
  endpoint: str = None,
  name: str = None
) -> None
```

###### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerGrafana.parameter.authorizationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a>

Grafana MCP server authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerGrafana.parameter.description"></a>

- *Type:* str

Optional description for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#description DevopsagentService#description}

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerGrafana.parameter.endpoint"></a>

- *Type:* str

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerGrafana.parameter.name"></a>

- *Type:* str

MCP server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#name DevopsagentService#name}

---

##### `put_mcp_server_new_relic` <a name="put_mcp_server_new_relic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerNewRelic"></a>

```python
def put_mcp_server_new_relic(
  authorization_config: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig = None
) -> None
```

###### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerNewRelic.parameter.authorizationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a>

New Relic authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `put_mcp_server_sig_v4` <a name="put_mcp_server_sig_v4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSigV4"></a>

```python
def put_mcp_server_sig_v4(
  authorization_config: DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig = None,
  description: str = None,
  endpoint: str = None,
  name: str = None
) -> None
```

###### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSigV4.parameter.authorizationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a>

SigV4 authorization configuration for MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSigV4.parameter.description"></a>

- *Type:* str

Optional description for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#description DevopsagentService#description}

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSigV4.parameter.endpoint"></a>

- *Type:* str

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSigV4.parameter.name"></a>

- *Type:* str

MCP server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#name DevopsagentService#name}

---

##### `put_mcp_server_splunk` <a name="put_mcp_server_splunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSplunk"></a>

```python
def put_mcp_server_splunk(
  authorization_config: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig = None,
  description: str = None,
  endpoint: str = None,
  name: str = None
) -> None
```

###### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSplunk.parameter.authorizationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a>

MCP server splunk authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSplunk.parameter.description"></a>

- *Type:* str

Optional description for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#description DevopsagentService#description}

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSplunk.parameter.endpoint"></a>

- *Type:* str

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSplunk.parameter.name"></a>

- *Type:* str

MCP server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#name DevopsagentService#name}

---

##### `put_pager_duty` <a name="put_pager_duty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putPagerDuty"></a>

```python
def put_pager_duty(
  authorization_config: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig = None,
  scopes: typing.List[str] = None
) -> None
```

###### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putPagerDuty.parameter.authorizationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a>

PagerDuty OAuth authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putPagerDuty.parameter.scopes"></a>

- *Type:* typing.List[str]

PagerDuty scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#scopes DevopsagentService#scopes}

---

##### `put_service_now` <a name="put_service_now" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putServiceNow"></a>

```python
def put_service_now(
  authorization_config: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig = None,
  instance_url: str = None
) -> None
```

###### `authorization_config`<sup>Optional</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putServiceNow.parameter.authorizationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a>

ServiceNow OAuth authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

###### `instance_url`<sup>Optional</sup> <a name="instance_url" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putServiceNow.parameter.instanceUrl"></a>

- *Type:* str

ServiceNow instance URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#instance_url DevopsagentService#instance_url}

---

##### `reset_azure_identity` <a name="reset_azure_identity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetAzureIdentity"></a>

```python
def reset_azure_identity() -> None
```

##### `reset_dynatrace` <a name="reset_dynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetDynatrace"></a>

```python
def reset_dynatrace() -> None
```

##### `reset_git_lab` <a name="reset_git_lab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetGitLab"></a>

```python
def reset_git_lab() -> None
```

##### `reset_mcp_server` <a name="reset_mcp_server" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServer"></a>

```python
def reset_mcp_server() -> None
```

##### `reset_mcp_server_grafana` <a name="reset_mcp_server_grafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerGrafana"></a>

```python
def reset_mcp_server_grafana() -> None
```

##### `reset_mcp_server_new_relic` <a name="reset_mcp_server_new_relic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerNewRelic"></a>

```python
def reset_mcp_server_new_relic() -> None
```

##### `reset_mcp_server_sig_v4` <a name="reset_mcp_server_sig_v4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerSigV4"></a>

```python
def reset_mcp_server_sig_v4() -> None
```

##### `reset_mcp_server_splunk` <a name="reset_mcp_server_splunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerSplunk"></a>

```python
def reset_mcp_server_splunk() -> None
```

##### `reset_pager_duty` <a name="reset_pager_duty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetPagerDuty"></a>

```python
def reset_pager_duty() -> None
```

##### `reset_service_now` <a name="reset_service_now" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetServiceNow"></a>

```python
def reset_service_now() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.azureIdentity">azure_identity</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference">DevopsagentServiceServiceDetailsAzureIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.dynatrace">dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference">DevopsagentServiceServiceDetailsDynatraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.gitLab">git_lab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference">DevopsagentServiceServiceDetailsGitLabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServer">mcp_server</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference">DevopsagentServiceServiceDetailsMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerGrafana">mcp_server_grafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerNewRelic">mcp_server_new_relic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSigV4">mcp_server_sig_v4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference">DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSplunk">mcp_server_splunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.pagerDuty">pager_duty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference">DevopsagentServiceServiceDetailsPagerDutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference">DevopsagentServiceServiceDetailsServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.azureIdentityInput">azure_identity_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.dynatraceInput">dynatrace_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.gitLabInput">git_lab_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerGrafanaInput">mcp_server_grafana_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerInput">mcp_server_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerNewRelicInput">mcp_server_new_relic_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSigV4Input">mcp_server_sig_v4_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSplunkInput">mcp_server_splunk_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.pagerDutyInput">pager_duty_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.serviceNowInput">service_now_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_identity`<sup>Required</sup> <a name="azure_identity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.azureIdentity"></a>

```python
azure_identity: DevopsagentServiceServiceDetailsAzureIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference">DevopsagentServiceServiceDetailsAzureIdentityOutputReference</a>

---

##### `dynatrace`<sup>Required</sup> <a name="dynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.dynatrace"></a>

```python
dynatrace: DevopsagentServiceServiceDetailsDynatraceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference">DevopsagentServiceServiceDetailsDynatraceOutputReference</a>

---

##### `git_lab`<sup>Required</sup> <a name="git_lab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.gitLab"></a>

```python
git_lab: DevopsagentServiceServiceDetailsGitLabOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference">DevopsagentServiceServiceDetailsGitLabOutputReference</a>

---

##### `mcp_server`<sup>Required</sup> <a name="mcp_server" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServer"></a>

```python
mcp_server: DevopsagentServiceServiceDetailsMcpServerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference">DevopsagentServiceServiceDetailsMcpServerOutputReference</a>

---

##### `mcp_server_grafana`<sup>Required</sup> <a name="mcp_server_grafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerGrafana"></a>

```python
mcp_server_grafana: DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference</a>

---

##### `mcp_server_new_relic`<sup>Required</sup> <a name="mcp_server_new_relic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerNewRelic"></a>

```python
mcp_server_new_relic: DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference</a>

---

##### `mcp_server_sig_v4`<sup>Required</sup> <a name="mcp_server_sig_v4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSigV4"></a>

```python
mcp_server_sig_v4: DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference">DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference</a>

---

##### `mcp_server_splunk`<sup>Required</sup> <a name="mcp_server_splunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSplunk"></a>

```python
mcp_server_splunk: DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference</a>

---

##### `pager_duty`<sup>Required</sup> <a name="pager_duty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.pagerDuty"></a>

```python
pager_duty: DevopsagentServiceServiceDetailsPagerDutyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference">DevopsagentServiceServiceDetailsPagerDutyOutputReference</a>

---

##### `service_now`<sup>Required</sup> <a name="service_now" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.serviceNow"></a>

```python
service_now: DevopsagentServiceServiceDetailsServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference">DevopsagentServiceServiceDetailsServiceNowOutputReference</a>

---

##### `azure_identity_input`<sup>Optional</sup> <a name="azure_identity_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.azureIdentityInput"></a>

```python
azure_identity_input: IResolvable | DevopsagentServiceServiceDetailsAzureIdentity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a>

---

##### `dynatrace_input`<sup>Optional</sup> <a name="dynatrace_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.dynatraceInput"></a>

```python
dynatrace_input: IResolvable | DevopsagentServiceServiceDetailsDynatrace
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a>

---

##### `git_lab_input`<sup>Optional</sup> <a name="git_lab_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.gitLabInput"></a>

```python
git_lab_input: IResolvable | DevopsagentServiceServiceDetailsGitLab
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a>

---

##### `mcp_server_grafana_input`<sup>Optional</sup> <a name="mcp_server_grafana_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerGrafanaInput"></a>

```python
mcp_server_grafana_input: IResolvable | DevopsagentServiceServiceDetailsMcpServerGrafana
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a>

---

##### `mcp_server_input`<sup>Optional</sup> <a name="mcp_server_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerInput"></a>

```python
mcp_server_input: IResolvable | DevopsagentServiceServiceDetailsMcpServer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a>

---

##### `mcp_server_new_relic_input`<sup>Optional</sup> <a name="mcp_server_new_relic_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerNewRelicInput"></a>

```python
mcp_server_new_relic_input: IResolvable | DevopsagentServiceServiceDetailsMcpServerNewRelic
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a>

---

##### `mcp_server_sig_v4_input`<sup>Optional</sup> <a name="mcp_server_sig_v4_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSigV4Input"></a>

```python
mcp_server_sig_v4_input: IResolvable | DevopsagentServiceServiceDetailsMcpServerSigV4
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a>

---

##### `mcp_server_splunk_input`<sup>Optional</sup> <a name="mcp_server_splunk_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSplunkInput"></a>

```python
mcp_server_splunk_input: IResolvable | DevopsagentServiceServiceDetailsMcpServerSplunk
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a>

---

##### `pager_duty_input`<sup>Optional</sup> <a name="pager_duty_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.pagerDutyInput"></a>

```python
pager_duty_input: IResolvable | DevopsagentServiceServiceDetailsPagerDuty
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a>

---

##### `service_now_input`<sup>Optional</sup> <a name="service_now_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.serviceNowInput"></a>

```python
service_now_input: IResolvable | DevopsagentServiceServiceDetailsServiceNow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a>

---


### DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName">reset_client_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters">reset_exchange_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_name` <a name="reset_client_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName"></a>

```python
def reset_client_name() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_exchange_parameters` <a name="reset_exchange_parameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters"></a>

```python
def reset_exchange_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput">client_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput">exchange_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">client_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">exchange_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_name_input`<sup>Optional</sup> <a name="client_name_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput"></a>

```python
client_name_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `exchange_parameters_input`<sup>Optional</sup> <a name="exchange_parameters_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput"></a>

```python
exchange_parameters_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_name`<sup>Required</sup> <a name="client_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```python
client_name: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `exchange_parameters`<sup>Required</sup> <a name="exchange_parameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```python
exchange_parameters: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a>

---


### DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.putOAuthClientCredentials">put_o_auth_client_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resetOAuthClientCredentials">reset_o_auth_client_credentials</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_o_auth_client_credentials` <a name="put_o_auth_client_credentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.putOAuthClientCredentials"></a>

```python
def put_o_auth_client_credentials(
  client_id: str = None,
  client_name: str = None,
  client_secret: str = None,
  exchange_parameters: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.clientId"></a>

- *Type:* str

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

###### `client_name`<sup>Optional</sup> <a name="client_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.clientName"></a>

- *Type:* str

User friendly OAuth client name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.clientSecret"></a>

- *Type:* str

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}

---

###### `exchange_parameters`<sup>Optional</sup> <a name="exchange_parameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.exchangeParameters"></a>

- *Type:* str

OAuth token exchange parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}

---

##### `reset_o_auth_client_credentials` <a name="reset_o_auth_client_credentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resetOAuthClientCredentials"></a>

```python
def reset_o_auth_client_credentials() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.oAuthClientCredentials">o_auth_client_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput">o_auth_client_credentials_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `o_auth_client_credentials`<sup>Required</sup> <a name="o_auth_client_credentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```python
o_auth_client_credentials: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `o_auth_client_credentials_input`<sup>Optional</sup> <a name="o_auth_client_credentials_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput"></a>

```python
o_auth_client_credentials_input: IResolvable | DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsPagerDutyOutputReference <a name="DevopsagentServiceServiceDetailsPagerDutyOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.putAuthorizationConfig">put_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resetAuthorizationConfig">reset_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorization_config` <a name="put_authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.putAuthorizationConfig"></a>

```python
def put_authorization_config(
  o_auth_client_credentials: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials = None
) -> None
```

###### `o_auth_client_credentials`<sup>Optional</sup> <a name="o_auth_client_credentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.putAuthorizationConfig.parameter.oAuthClientCredentials"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a>

OAuth client credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}

---

##### `reset_authorization_config` <a name="reset_authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resetAuthorizationConfig"></a>

```python
def reset_authorization_config() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.authorizationConfigInput">authorization_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.authorizationConfig"></a>

```python
authorization_config: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference</a>

---

##### `authorization_config_input`<sup>Optional</sup> <a name="authorization_config_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.authorizationConfigInput"></a>

```python
authorization_config_input: IResolvable | DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a>

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsPagerDuty
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a>

---


### DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName">reset_client_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters">reset_exchange_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_name` <a name="reset_client_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName"></a>

```python
def reset_client_name() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_exchange_parameters` <a name="reset_exchange_parameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters"></a>

```python
def reset_exchange_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput">client_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput">exchange_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">client_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">exchange_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_name_input`<sup>Optional</sup> <a name="client_name_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput"></a>

```python
client_name_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `exchange_parameters_input`<sup>Optional</sup> <a name="exchange_parameters_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput"></a>

```python
exchange_parameters_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_name`<sup>Required</sup> <a name="client_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```python
client_name: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `exchange_parameters`<sup>Required</sup> <a name="exchange_parameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```python
exchange_parameters: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a>

---


### DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.putOAuthClientCredentials">put_o_auth_client_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resetOAuthClientCredentials">reset_o_auth_client_credentials</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_o_auth_client_credentials` <a name="put_o_auth_client_credentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.putOAuthClientCredentials"></a>

```python
def put_o_auth_client_credentials(
  client_id: str = None,
  client_name: str = None,
  client_secret: str = None,
  exchange_parameters: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.clientId"></a>

- *Type:* str

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

###### `client_name`<sup>Optional</sup> <a name="client_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.clientName"></a>

- *Type:* str

User friendly OAuth client name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.clientSecret"></a>

- *Type:* str

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}

---

###### `exchange_parameters`<sup>Optional</sup> <a name="exchange_parameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.exchangeParameters"></a>

- *Type:* str

OAuth token exchange parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}

---

##### `reset_o_auth_client_credentials` <a name="reset_o_auth_client_credentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resetOAuthClientCredentials"></a>

```python
def reset_o_auth_client_credentials() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.oAuthClientCredentials">o_auth_client_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput">o_auth_client_credentials_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `o_auth_client_credentials`<sup>Required</sup> <a name="o_auth_client_credentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```python
o_auth_client_credentials: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `o_auth_client_credentials_input`<sup>Optional</sup> <a name="o_auth_client_credentials_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput"></a>

```python
o_auth_client_credentials_input: IResolvable | DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsServiceNowOutputReference <a name="DevopsagentServiceServiceDetailsServiceNowOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.putAuthorizationConfig">put_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resetAuthorizationConfig">reset_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resetInstanceUrl">reset_instance_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorization_config` <a name="put_authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.putAuthorizationConfig"></a>

```python
def put_authorization_config(
  o_auth_client_credentials: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials = None
) -> None
```

###### `o_auth_client_credentials`<sup>Optional</sup> <a name="o_auth_client_credentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.putAuthorizationConfig.parameter.oAuthClientCredentials"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a>

OAuth client credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}

---

##### `reset_authorization_config` <a name="reset_authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resetAuthorizationConfig"></a>

```python
def reset_authorization_config() -> None
```

##### `reset_instance_url` <a name="reset_instance_url" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resetInstanceUrl"></a>

```python
def reset_instance_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.authorizationConfigInput">authorization_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.instanceUrlInput">instance_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.instanceUrl">instance_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.authorizationConfig"></a>

```python
authorization_config: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference</a>

---

##### `authorization_config_input`<sup>Optional</sup> <a name="authorization_config_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.authorizationConfigInput"></a>

```python
authorization_config_input: IResolvable | DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a>

---

##### `instance_url_input`<sup>Optional</sup> <a name="instance_url_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.instanceUrlInput"></a>

```python
instance_url_input: str
```

- *Type:* str

---

##### `instance_url`<sup>Required</sup> <a name="instance_url" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.instanceUrl"></a>

```python
instance_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceServiceDetailsServiceNow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a>

---


### DevopsagentServiceTagsList <a name="DevopsagentServiceTagsList" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsagentServiceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DevopsagentServiceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>]

---


### DevopsagentServiceTagsOutputReference <a name="DevopsagentServiceTagsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_service

devopsagentService.DevopsagentServiceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentServiceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>

---



