# `appflowConnector` Submodule <a name="`appflowConnector` Submodule" id="@cdktn/provider-awscc.appflowConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppflowConnector <a name="AppflowConnector" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector awscc_appflow_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer"></a>

```python
from cdktn_provider_awscc import appflow_connector

appflowConnector.AppflowConnector(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connector_provisioning_config: AppflowConnectorConnectorProvisioningConfig,
  connector_provisioning_type: str,
  connector_label: str = None,
  description: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.connectorProvisioningConfig">connector_provisioning_config</a></code> | <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a></code> | Contains information about the configuration of the connector being registered. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.connectorProvisioningType">connector_provisioning_type</a></code> | <code>str</code> | The provisioning type of the connector. Currently the only supported value is LAMBDA. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.connectorLabel">connector_label</a></code> | <code>str</code> | The name of the connector. The name is unique for each ConnectorRegistration in your AWS account. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.description">description</a></code> | <code>str</code> | A description about the connector that's being registered. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connector_provisioning_config`<sup>Required</sup> <a name="connector_provisioning_config" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.connectorProvisioningConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a>

Contains information about the configuration of the connector being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector#connector_provisioning_config AppflowConnector#connector_provisioning_config}

---

##### `connector_provisioning_type`<sup>Required</sup> <a name="connector_provisioning_type" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.connectorProvisioningType"></a>

- *Type:* str

The provisioning type of the connector. Currently the only supported value is LAMBDA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector#connector_provisioning_type AppflowConnector#connector_provisioning_type}

---

##### `connector_label`<sup>Optional</sup> <a name="connector_label" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.connectorLabel"></a>

- *Type:* str

The name of the connector. The name is unique for each ConnectorRegistration in your AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector#connector_label AppflowConnector#connector_label}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.description"></a>

- *Type:* str

A description about the connector that's being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector#description AppflowConnector#description}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.putConnectorProvisioningConfig">put_connector_provisioning_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetConnectorLabel">reset_connector_label</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetDescription">reset_description</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_connector_provisioning_config` <a name="put_connector_provisioning_config" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.putConnectorProvisioningConfig"></a>

```python
def put_connector_provisioning_config(
  lambda: AppflowConnectorConnectorProvisioningConfigLambda = None
) -> None
```

###### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.putConnectorProvisioningConfig.parameter.lambda"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a>

Contains information about the configuration of the lambda which is being registered as the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector#lambda AppflowConnector#lambda}

---

##### `reset_connector_label` <a name="reset_connector_label" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetConnectorLabel"></a>

```python
def reset_connector_label() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetDescription"></a>

```python
def reset_description() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppflowConnector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isConstruct"></a>

```python
from cdktn_provider_awscc import appflow_connector

appflowConnector.AppflowConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appflow_connector

appflowConnector.AppflowConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appflow_connector

appflowConnector.AppflowConnector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appflow_connector

appflowConnector.AppflowConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppflowConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppflowConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppflowConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppflowConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorArn">connector_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningConfig">connector_provisioning_config</a></code> | <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference">AppflowConnectorConnectorProvisioningConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorLabelInput">connector_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningConfigInput">connector_provisioning_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningTypeInput">connector_provisioning_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorLabel">connector_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningType">connector_provisioning_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.description">description</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connector_arn`<sup>Required</sup> <a name="connector_arn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorArn"></a>

```python
connector_arn: str
```

- *Type:* str

---

##### `connector_provisioning_config`<sup>Required</sup> <a name="connector_provisioning_config" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningConfig"></a>

```python
connector_provisioning_config: AppflowConnectorConnectorProvisioningConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference">AppflowConnectorConnectorProvisioningConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `connector_label_input`<sup>Optional</sup> <a name="connector_label_input" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorLabelInput"></a>

```python
connector_label_input: str
```

- *Type:* str

---

##### `connector_provisioning_config_input`<sup>Optional</sup> <a name="connector_provisioning_config_input" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningConfigInput"></a>

```python
connector_provisioning_config_input: IResolvable | AppflowConnectorConnectorProvisioningConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a>

---

##### `connector_provisioning_type_input`<sup>Optional</sup> <a name="connector_provisioning_type_input" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningTypeInput"></a>

```python
connector_provisioning_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `connector_label`<sup>Required</sup> <a name="connector_label" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorLabel"></a>

```python
connector_label: str
```

- *Type:* str

---

##### `connector_provisioning_type`<sup>Required</sup> <a name="connector_provisioning_type" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningType"></a>

```python
connector_provisioning_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.description"></a>

```python
description: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppflowConnectorConfig <a name="AppflowConnectorConfig" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appflow_connector

appflowConnector.AppflowConnectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connector_provisioning_config: AppflowConnectorConnectorProvisioningConfig,
  connector_provisioning_type: str,
  connector_label: str = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorProvisioningConfig">connector_provisioning_config</a></code> | <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a></code> | Contains information about the configuration of the connector being registered. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorProvisioningType">connector_provisioning_type</a></code> | <code>str</code> | The provisioning type of the connector. Currently the only supported value is LAMBDA. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorLabel">connector_label</a></code> | <code>str</code> | The name of the connector. The name is unique for each ConnectorRegistration in your AWS account. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.description">description</a></code> | <code>str</code> | A description about the connector that's being registered. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connector_provisioning_config`<sup>Required</sup> <a name="connector_provisioning_config" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorProvisioningConfig"></a>

```python
connector_provisioning_config: AppflowConnectorConnectorProvisioningConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a>

Contains information about the configuration of the connector being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector#connector_provisioning_config AppflowConnector#connector_provisioning_config}

---

##### `connector_provisioning_type`<sup>Required</sup> <a name="connector_provisioning_type" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorProvisioningType"></a>

```python
connector_provisioning_type: str
```

- *Type:* str

The provisioning type of the connector. Currently the only supported value is LAMBDA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector#connector_provisioning_type AppflowConnector#connector_provisioning_type}

---

##### `connector_label`<sup>Optional</sup> <a name="connector_label" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorLabel"></a>

```python
connector_label: str
```

- *Type:* str

The name of the connector. The name is unique for each ConnectorRegistration in your AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector#connector_label AppflowConnector#connector_label}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description about the connector that's being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector#description AppflowConnector#description}

---

### AppflowConnectorConnectorProvisioningConfig <a name="AppflowConnectorConnectorProvisioningConfig" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appflow_connector

appflowConnector.AppflowConnectorConnectorProvisioningConfig(
  lambda: AppflowConnectorConnectorProvisioningConfigLambda = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a></code> | Contains information about the configuration of the lambda which is being registered as the connector. |

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig.property.lambda"></a>

```python
lambda: AppflowConnectorConnectorProvisioningConfigLambda
```

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a>

Contains information about the configuration of the lambda which is being registered as the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector#lambda AppflowConnector#lambda}

---

### AppflowConnectorConnectorProvisioningConfigLambda <a name="AppflowConnectorConnectorProvisioningConfigLambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda.Initializer"></a>

```python
from cdktn_provider_awscc import appflow_connector

appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda(
  lambda_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | Lambda ARN of the connector being registered. |

---

##### `lambda_arn`<sup>Optional</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

Lambda ARN of the connector being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector#lambda_arn AppflowConnector#lambda_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### AppflowConnectorConnectorProvisioningConfigLambdaOutputReference <a name="AppflowConnectorConnectorProvisioningConfigLambdaOutputReference" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appflow_connector

appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resetLambdaArn">reset_lambda_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lambda_arn` <a name="reset_lambda_arn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resetLambdaArn"></a>

```python
def reset_lambda_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.lambdaArnInput">lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_arn_input`<sup>Optional</sup> <a name="lambda_arn_input" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.lambdaArnInput"></a>

```python
lambda_arn_input: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppflowConnectorConnectorProvisioningConfigLambda
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a>

---


### AppflowConnectorConnectorProvisioningConfigOutputReference <a name="AppflowConnectorConnectorProvisioningConfigOutputReference" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appflow_connector

appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.putLambda">put_lambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.resetLambda">reset_lambda</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lambda` <a name="put_lambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.putLambda"></a>

```python
def put_lambda(
  lambda_arn: str = None
) -> None
```

###### `lambda_arn`<sup>Optional</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.putLambda.parameter.lambdaArn"></a>

- *Type:* str

Lambda ARN of the connector being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector#lambda_arn AppflowConnector#lambda_arn}

---

##### `reset_lambda` <a name="reset_lambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.resetLambda"></a>

```python
def reset_lambda() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference">AppflowConnectorConnectorProvisioningConfigLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.lambdaInput">lambda_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.lambda"></a>

```python
lambda: AppflowConnectorConnectorProvisioningConfigLambdaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference">AppflowConnectorConnectorProvisioningConfigLambdaOutputReference</a>

---

##### `lambda_input`<sup>Optional</sup> <a name="lambda_input" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.lambdaInput"></a>

```python
lambda_input: IResolvable | AppflowConnectorConnectorProvisioningConfigLambda
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppflowConnectorConnectorProvisioningConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a>

---



