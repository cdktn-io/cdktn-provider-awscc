# `refactorspacesApplication` Submodule <a name="`refactorspacesApplication` Submodule" id="@cdktn/provider-awscc.refactorspacesApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RefactorspacesApplication <a name="RefactorspacesApplication" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application awscc_refactorspaces_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_application

refactorspacesApplication.RefactorspacesApplication(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  environment_identifier: str,
  name: str,
  proxy_type: str,
  vpc_id: str,
  api_gateway_proxy: RefactorspacesApplicationApiGatewayProxy = None,
  tags: IResolvable | typing.List[RefactorspacesApplicationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#environment_identifier RefactorspacesApplication#environment_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#name RefactorspacesApplication#name}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.proxyType">proxy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#proxy_type RefactorspacesApplication#proxy_type}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#vpc_id RefactorspacesApplication#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.apiGatewayProxy">api_gateway_proxy</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#api_gateway_proxy RefactorspacesApplication#api_gateway_proxy}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>]</code> | Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.environmentIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#environment_identifier RefactorspacesApplication#environment_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#name RefactorspacesApplication#name}.

---

##### `proxy_type`<sup>Required</sup> <a name="proxy_type" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.proxyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#proxy_type RefactorspacesApplication#proxy_type}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#vpc_id RefactorspacesApplication#vpc_id}.

---

##### `api_gateway_proxy`<sup>Optional</sup> <a name="api_gateway_proxy" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.apiGatewayProxy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#api_gateway_proxy RefactorspacesApplication#api_gateway_proxy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>]

Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#tags RefactorspacesApplication#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.putApiGatewayProxy">put_api_gateway_proxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.resetApiGatewayProxy">reset_api_gateway_proxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_api_gateway_proxy` <a name="put_api_gateway_proxy" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.putApiGatewayProxy"></a>

```python
def put_api_gateway_proxy(
  endpoint_type: str = None,
  stage_name: str = None
) -> None
```

###### `endpoint_type`<sup>Optional</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.putApiGatewayProxy.parameter.endpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#endpoint_type RefactorspacesApplication#endpoint_type}.

---

###### `stage_name`<sup>Optional</sup> <a name="stage_name" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.putApiGatewayProxy.parameter.stageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#stage_name RefactorspacesApplication#stage_name}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RefactorspacesApplicationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>]

---

##### `reset_api_gateway_proxy` <a name="reset_api_gateway_proxy" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.resetApiGatewayProxy"></a>

```python
def reset_api_gateway_proxy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RefactorspacesApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isConstruct"></a>

```python
from cdktn_provider_awscc import refactorspaces_application

refactorspacesApplication.RefactorspacesApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isTerraformElement"></a>

```python
from cdktn_provider_awscc import refactorspaces_application

refactorspacesApplication.RefactorspacesApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isTerraformResource"></a>

```python
from cdktn_provider_awscc import refactorspaces_application

refactorspacesApplication.RefactorspacesApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import refactorspaces_application

refactorspacesApplication.RefactorspacesApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RefactorspacesApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RefactorspacesApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RefactorspacesApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RefactorspacesApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.apiGatewayId">api_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.apiGatewayProxy">api_gateway_proxy</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference">RefactorspacesApplicationApiGatewayProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.applicationIdentifier">application_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.nlbArn">nlb_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.nlbName">nlb_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.proxyUrl">proxy_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.stageName">stage_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList">RefactorspacesApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.vpcLinkId">vpc_link_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.apiGatewayProxyInput">api_gateway_proxy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.environmentIdentifierInput">environment_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.proxyTypeInput">proxy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.proxyType">proxy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_gateway_id`<sup>Required</sup> <a name="api_gateway_id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.apiGatewayId"></a>

```python
api_gateway_id: str
```

- *Type:* str

---

##### `api_gateway_proxy`<sup>Required</sup> <a name="api_gateway_proxy" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.apiGatewayProxy"></a>

```python
api_gateway_proxy: RefactorspacesApplicationApiGatewayProxyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference">RefactorspacesApplicationApiGatewayProxyOutputReference</a>

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.applicationIdentifier"></a>

```python
application_identifier: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `nlb_arn`<sup>Required</sup> <a name="nlb_arn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.nlbArn"></a>

```python
nlb_arn: str
```

- *Type:* str

---

##### `nlb_name`<sup>Required</sup> <a name="nlb_name" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.nlbName"></a>

```python
nlb_name: str
```

- *Type:* str

---

##### `proxy_url`<sup>Required</sup> <a name="proxy_url" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.proxyUrl"></a>

```python
proxy_url: str
```

- *Type:* str

---

##### `stage_name`<sup>Required</sup> <a name="stage_name" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.stageName"></a>

```python
stage_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.tags"></a>

```python
tags: RefactorspacesApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList">RefactorspacesApplicationTagsList</a>

---

##### `vpc_link_id`<sup>Required</sup> <a name="vpc_link_id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.vpcLinkId"></a>

```python
vpc_link_id: str
```

- *Type:* str

---

##### `api_gateway_proxy_input`<sup>Optional</sup> <a name="api_gateway_proxy_input" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.apiGatewayProxyInput"></a>

```python
api_gateway_proxy_input: IResolvable | RefactorspacesApplicationApiGatewayProxy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a>

---

##### `environment_identifier_input`<sup>Optional</sup> <a name="environment_identifier_input" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.environmentIdentifierInput"></a>

```python
environment_identifier_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `proxy_type_input`<sup>Optional</sup> <a name="proxy_type_input" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.proxyTypeInput"></a>

```python
proxy_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RefactorspacesApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.environmentIdentifier"></a>

```python
environment_identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `proxy_type`<sup>Required</sup> <a name="proxy_type" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.proxyType"></a>

```python
proxy_type: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RefactorspacesApplicationApiGatewayProxy <a name="RefactorspacesApplicationApiGatewayProxy" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_application

refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy(
  endpoint_type: str = None,
  stage_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy.property.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#endpoint_type RefactorspacesApplication#endpoint_type}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy.property.stageName">stage_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#stage_name RefactorspacesApplication#stage_name}. |

---

##### `endpoint_type`<sup>Optional</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#endpoint_type RefactorspacesApplication#endpoint_type}.

---

##### `stage_name`<sup>Optional</sup> <a name="stage_name" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy.property.stageName"></a>

```python
stage_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#stage_name RefactorspacesApplication#stage_name}.

---

### RefactorspacesApplicationConfig <a name="RefactorspacesApplicationConfig" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_application

refactorspacesApplication.RefactorspacesApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  environment_identifier: str,
  name: str,
  proxy_type: str,
  vpc_id: str,
  api_gateway_proxy: RefactorspacesApplicationApiGatewayProxy = None,
  tags: IResolvable | typing.List[RefactorspacesApplicationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#environment_identifier RefactorspacesApplication#environment_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#name RefactorspacesApplication#name}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.proxyType">proxy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#proxy_type RefactorspacesApplication#proxy_type}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#vpc_id RefactorspacesApplication#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.apiGatewayProxy">api_gateway_proxy</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#api_gateway_proxy RefactorspacesApplication#api_gateway_proxy}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>]</code> | Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.environmentIdentifier"></a>

```python
environment_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#environment_identifier RefactorspacesApplication#environment_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#name RefactorspacesApplication#name}.

---

##### `proxy_type`<sup>Required</sup> <a name="proxy_type" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.proxyType"></a>

```python
proxy_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#proxy_type RefactorspacesApplication#proxy_type}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#vpc_id RefactorspacesApplication#vpc_id}.

---

##### `api_gateway_proxy`<sup>Optional</sup> <a name="api_gateway_proxy" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.apiGatewayProxy"></a>

```python
api_gateway_proxy: RefactorspacesApplicationApiGatewayProxy
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#api_gateway_proxy RefactorspacesApplication#api_gateway_proxy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RefactorspacesApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>]

Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#tags RefactorspacesApplication#tags}

---

### RefactorspacesApplicationTags <a name="RefactorspacesApplicationTags" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_application

refactorspacesApplication.RefactorspacesApplicationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags.property.key">key</a></code> | <code>str</code> | A string used to identify this tag. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags.property.value">value</a></code> | <code>str</code> | A string containing the value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags.property.key"></a>

```python
key: str
```

- *Type:* str

A string used to identify this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#key RefactorspacesApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags.property.value"></a>

```python
value: str
```

- *Type:* str

A string containing the value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_application#value RefactorspacesApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RefactorspacesApplicationApiGatewayProxyOutputReference <a name="RefactorspacesApplicationApiGatewayProxyOutputReference" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_application

refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resetEndpointType">reset_endpoint_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resetStageName">reset_stage_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_endpoint_type` <a name="reset_endpoint_type" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resetEndpointType"></a>

```python
def reset_endpoint_type() -> None
```

##### `reset_stage_name` <a name="reset_stage_name" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resetStageName"></a>

```python
def reset_stage_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.stageNameInput">stage_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.stageName">stage_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `stage_name_input`<sup>Optional</sup> <a name="stage_name_input" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.stageNameInput"></a>

```python
stage_name_input: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `stage_name`<sup>Required</sup> <a name="stage_name" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.stageName"></a>

```python
stage_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RefactorspacesApplicationApiGatewayProxy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a>

---


### RefactorspacesApplicationTagsList <a name="RefactorspacesApplicationTagsList" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_application

refactorspacesApplication.RefactorspacesApplicationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RefactorspacesApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RefactorspacesApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>]

---


### RefactorspacesApplicationTagsOutputReference <a name="RefactorspacesApplicationTagsOutputReference" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_application

refactorspacesApplication.RefactorspacesApplicationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RefactorspacesApplicationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>

---



