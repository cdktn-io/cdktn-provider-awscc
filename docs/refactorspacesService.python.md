# `refactorspacesService` Submodule <a name="`refactorspacesService` Submodule" id="@cdktn/provider-awscc.refactorspacesService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RefactorspacesService <a name="RefactorspacesService" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service awscc_refactorspaces_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_service

refactorspacesService.RefactorspacesService(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_identifier: str,
  endpoint_type: str,
  environment_identifier: str,
  name: str,
  description: str = None,
  lambda_endpoint: RefactorspacesServiceLambdaEndpoint = None,
  tags: IResolvable | typing.List[RefactorspacesServiceTags] = None,
  url_endpoint: RefactorspacesServiceUrlEndpoint = None,
  vpc_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.applicationIdentifier">application_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#application_identifier RefactorspacesService#application_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#endpoint_type RefactorspacesService#endpoint_type}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#environment_identifier RefactorspacesService#environment_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#name RefactorspacesService#name}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#description RefactorspacesService#description}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.lambdaEndpoint">lambda_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpoint">RefactorspacesServiceLambdaEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#lambda_endpoint RefactorspacesService#lambda_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTags">RefactorspacesServiceTags</a>]</code> | Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.urlEndpoint">url_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpoint">RefactorspacesServiceUrlEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#url_endpoint RefactorspacesService#url_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#vpc_id RefactorspacesService#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.applicationIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#application_identifier RefactorspacesService#application_identifier}.

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.endpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#endpoint_type RefactorspacesService#endpoint_type}.

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.environmentIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#environment_identifier RefactorspacesService#environment_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#name RefactorspacesService#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#description RefactorspacesService#description}.

---

##### `lambda_endpoint`<sup>Optional</sup> <a name="lambda_endpoint" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.lambdaEndpoint"></a>

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpoint">RefactorspacesServiceLambdaEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#lambda_endpoint RefactorspacesService#lambda_endpoint}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTags">RefactorspacesServiceTags</a>]

Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#tags RefactorspacesService#tags}

---

##### `url_endpoint`<sup>Optional</sup> <a name="url_endpoint" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.urlEndpoint"></a>

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpoint">RefactorspacesServiceUrlEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#url_endpoint RefactorspacesService#url_endpoint}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#vpc_id RefactorspacesService#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.putLambdaEndpoint">put_lambda_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.putUrlEndpoint">put_url_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.resetLambdaEndpoint">reset_lambda_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.resetUrlEndpoint">reset_url_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_lambda_endpoint` <a name="put_lambda_endpoint" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.putLambdaEndpoint"></a>

```python
def put_lambda_endpoint(
  arn: str = None
) -> None
```

###### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.putLambdaEndpoint.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#arn RefactorspacesService#arn}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RefactorspacesServiceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTags">RefactorspacesServiceTags</a>]

---

##### `put_url_endpoint` <a name="put_url_endpoint" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.putUrlEndpoint"></a>

```python
def put_url_endpoint(
  health_url: str = None,
  url: str = None
) -> None
```

###### `health_url`<sup>Optional</sup> <a name="health_url" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.putUrlEndpoint.parameter.healthUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#health_url RefactorspacesService#health_url}.

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.putUrlEndpoint.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#url RefactorspacesService#url}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_lambda_endpoint` <a name="reset_lambda_endpoint" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.resetLambdaEndpoint"></a>

```python
def reset_lambda_endpoint() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_url_endpoint` <a name="reset_url_endpoint" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.resetUrlEndpoint"></a>

```python
def reset_url_endpoint() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RefactorspacesService resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.isConstruct"></a>

```python
from cdktn_provider_awscc import refactorspaces_service

refactorspacesService.RefactorspacesService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.isTerraformElement"></a>

```python
from cdktn_provider_awscc import refactorspaces_service

refactorspacesService.RefactorspacesService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.isTerraformResource"></a>

```python
from cdktn_provider_awscc import refactorspaces_service

refactorspacesService.RefactorspacesService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import refactorspaces_service

refactorspacesService.RefactorspacesService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RefactorspacesService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RefactorspacesService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RefactorspacesService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RefactorspacesService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.lambdaEndpoint">lambda_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference">RefactorspacesServiceLambdaEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.serviceIdentifier">service_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList">RefactorspacesServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.urlEndpoint">url_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference">RefactorspacesServiceUrlEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.applicationIdentifierInput">application_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.environmentIdentifierInput">environment_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.lambdaEndpointInput">lambda_endpoint_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpoint">RefactorspacesServiceLambdaEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTags">RefactorspacesServiceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.urlEndpointInput">url_endpoint_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpoint">RefactorspacesServiceUrlEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.applicationIdentifier">application_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lambda_endpoint`<sup>Required</sup> <a name="lambda_endpoint" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.lambdaEndpoint"></a>

```python
lambda_endpoint: RefactorspacesServiceLambdaEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference">RefactorspacesServiceLambdaEndpointOutputReference</a>

---

##### `service_identifier`<sup>Required</sup> <a name="service_identifier" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.serviceIdentifier"></a>

```python
service_identifier: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.tags"></a>

```python
tags: RefactorspacesServiceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList">RefactorspacesServiceTagsList</a>

---

##### `url_endpoint`<sup>Required</sup> <a name="url_endpoint" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.urlEndpoint"></a>

```python
url_endpoint: RefactorspacesServiceUrlEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference">RefactorspacesServiceUrlEndpointOutputReference</a>

---

##### `application_identifier_input`<sup>Optional</sup> <a name="application_identifier_input" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.applicationIdentifierInput"></a>

```python
application_identifier_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `environment_identifier_input`<sup>Optional</sup> <a name="environment_identifier_input" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.environmentIdentifierInput"></a>

```python
environment_identifier_input: str
```

- *Type:* str

---

##### `lambda_endpoint_input`<sup>Optional</sup> <a name="lambda_endpoint_input" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.lambdaEndpointInput"></a>

```python
lambda_endpoint_input: IResolvable | RefactorspacesServiceLambdaEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpoint">RefactorspacesServiceLambdaEndpoint</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RefactorspacesServiceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTags">RefactorspacesServiceTags</a>]

---

##### `url_endpoint_input`<sup>Optional</sup> <a name="url_endpoint_input" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.urlEndpointInput"></a>

```python
url_endpoint_input: IResolvable | RefactorspacesServiceUrlEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpoint">RefactorspacesServiceUrlEndpoint</a>

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.applicationIdentifier"></a>

```python
application_identifier: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.environmentIdentifier"></a>

```python
environment_identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RefactorspacesServiceConfig <a name="RefactorspacesServiceConfig" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_service

refactorspacesService.RefactorspacesServiceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_identifier: str,
  endpoint_type: str,
  environment_identifier: str,
  name: str,
  description: str = None,
  lambda_endpoint: RefactorspacesServiceLambdaEndpoint = None,
  tags: IResolvable | typing.List[RefactorspacesServiceTags] = None,
  url_endpoint: RefactorspacesServiceUrlEndpoint = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.applicationIdentifier">application_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#application_identifier RefactorspacesService#application_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#endpoint_type RefactorspacesService#endpoint_type}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#environment_identifier RefactorspacesService#environment_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#name RefactorspacesService#name}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#description RefactorspacesService#description}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.lambdaEndpoint">lambda_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpoint">RefactorspacesServiceLambdaEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#lambda_endpoint RefactorspacesService#lambda_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTags">RefactorspacesServiceTags</a>]</code> | Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.urlEndpoint">url_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpoint">RefactorspacesServiceUrlEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#url_endpoint RefactorspacesService#url_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#vpc_id RefactorspacesService#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.applicationIdentifier"></a>

```python
application_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#application_identifier RefactorspacesService#application_identifier}.

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#endpoint_type RefactorspacesService#endpoint_type}.

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.environmentIdentifier"></a>

```python
environment_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#environment_identifier RefactorspacesService#environment_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#name RefactorspacesService#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#description RefactorspacesService#description}.

---

##### `lambda_endpoint`<sup>Optional</sup> <a name="lambda_endpoint" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.lambdaEndpoint"></a>

```python
lambda_endpoint: RefactorspacesServiceLambdaEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpoint">RefactorspacesServiceLambdaEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#lambda_endpoint RefactorspacesService#lambda_endpoint}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RefactorspacesServiceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTags">RefactorspacesServiceTags</a>]

Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#tags RefactorspacesService#tags}

---

##### `url_endpoint`<sup>Optional</sup> <a name="url_endpoint" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.urlEndpoint"></a>

```python
url_endpoint: RefactorspacesServiceUrlEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpoint">RefactorspacesServiceUrlEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#url_endpoint RefactorspacesService#url_endpoint}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#vpc_id RefactorspacesService#vpc_id}.

---

### RefactorspacesServiceLambdaEndpoint <a name="RefactorspacesServiceLambdaEndpoint" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_service

refactorspacesService.RefactorspacesServiceLambdaEndpoint(
  arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpoint.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#arn RefactorspacesService#arn}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#arn RefactorspacesService#arn}.

---

### RefactorspacesServiceTags <a name="RefactorspacesServiceTags" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTags.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_service

refactorspacesService.RefactorspacesServiceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTags.property.key">key</a></code> | <code>str</code> | A string used to identify this tag. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTags.property.value">value</a></code> | <code>str</code> | A string containing the value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTags.property.key"></a>

```python
key: str
```

- *Type:* str

A string used to identify this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#key RefactorspacesService#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTags.property.value"></a>

```python
value: str
```

- *Type:* str

A string containing the value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#value RefactorspacesService#value}

---

### RefactorspacesServiceUrlEndpoint <a name="RefactorspacesServiceUrlEndpoint" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_service

refactorspacesService.RefactorspacesServiceUrlEndpoint(
  health_url: str = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpoint.property.healthUrl">health_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#health_url RefactorspacesService#health_url}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpoint.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#url RefactorspacesService#url}. |

---

##### `health_url`<sup>Optional</sup> <a name="health_url" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpoint.property.healthUrl"></a>

```python
health_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#health_url RefactorspacesService#health_url}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpoint.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_service#url RefactorspacesService#url}.

---

## Classes <a name="Classes" id="Classes"></a>

### RefactorspacesServiceLambdaEndpointOutputReference <a name="RefactorspacesServiceLambdaEndpointOutputReference" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_service

refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.resetArn">reset_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpoint">RefactorspacesServiceLambdaEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RefactorspacesServiceLambdaEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceLambdaEndpoint">RefactorspacesServiceLambdaEndpoint</a>

---


### RefactorspacesServiceTagsList <a name="RefactorspacesServiceTagsList" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_service

refactorspacesService.RefactorspacesServiceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RefactorspacesServiceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTags">RefactorspacesServiceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RefactorspacesServiceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTags">RefactorspacesServiceTags</a>]

---


### RefactorspacesServiceTagsOutputReference <a name="RefactorspacesServiceTagsOutputReference" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_service

refactorspacesService.RefactorspacesServiceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTags">RefactorspacesServiceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RefactorspacesServiceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceTags">RefactorspacesServiceTags</a>

---


### RefactorspacesServiceUrlEndpointOutputReference <a name="RefactorspacesServiceUrlEndpointOutputReference" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_service

refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.resetHealthUrl">reset_health_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_health_url` <a name="reset_health_url" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.resetHealthUrl"></a>

```python
def reset_health_url() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.property.healthUrlInput">health_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.property.healthUrl">health_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpoint">RefactorspacesServiceUrlEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_url_input`<sup>Optional</sup> <a name="health_url_input" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.property.healthUrlInput"></a>

```python
health_url_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `health_url`<sup>Required</sup> <a name="health_url" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.property.healthUrl"></a>

```python
health_url: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RefactorspacesServiceUrlEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesService.RefactorspacesServiceUrlEndpoint">RefactorspacesServiceUrlEndpoint</a>

---



