# `apigatewayDeployment` Submodule <a name="`apigatewayDeployment` Submodule" id="@cdktn/provider-awscc.apigatewayDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayDeployment <a name="ApigatewayDeployment" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment awscc_apigateway_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_deployment

apigatewayDeployment.ApigatewayDeployment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rest_api_id: str,
  deployment_canary_settings: ApigatewayDeploymentDeploymentCanarySettings = None,
  description: str = None,
  stage_description: ApigatewayDeploymentStageDescription = None,
  stage_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#rest_api_id ApigatewayDeployment#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.deploymentCanarySettings">deployment_canary_settings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a></code> | The ``DeploymentCanarySettings`` property type specifies settings for the canary deployment. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#description ApigatewayDeployment#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.stageDescription">stage_description</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a></code> | The description of the Stage resource for the Deployment resource to create. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.stageName">stage_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#stage_name ApigatewayDeployment#stage_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.restApiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#rest_api_id ApigatewayDeployment#rest_api_id}.

---

##### `deployment_canary_settings`<sup>Optional</sup> <a name="deployment_canary_settings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.deploymentCanarySettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a>

The ``DeploymentCanarySettings`` property type specifies settings for the canary deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#deployment_canary_settings ApigatewayDeployment#deployment_canary_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#description ApigatewayDeployment#description}.

---

##### `stage_description`<sup>Optional</sup> <a name="stage_description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.stageDescription"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a>

The description of the Stage resource for the Deployment resource to create.

To specify a stage description, you must also provide a stage name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#stage_description ApigatewayDeployment#stage_description}

---

##### `stage_name`<sup>Optional</sup> <a name="stage_name" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.stageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#stage_name ApigatewayDeployment#stage_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putDeploymentCanarySettings">put_deployment_canary_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription">put_stage_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetDeploymentCanarySettings">reset_deployment_canary_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetStageDescription">reset_stage_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetStageName">reset_stage_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_deployment_canary_settings` <a name="put_deployment_canary_settings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putDeploymentCanarySettings"></a>

```python
def put_deployment_canary_settings(
  percent_traffic: typing.Union[int, float] = None,
  stage_variable_overrides: typing.Mapping[str] = None,
  use_stage_cache: bool | IResolvable = None
) -> None
```

###### `percent_traffic`<sup>Optional</sup> <a name="percent_traffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putDeploymentCanarySettings.parameter.percentTraffic"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#percent_traffic ApigatewayDeployment#percent_traffic}.

---

###### `stage_variable_overrides`<sup>Optional</sup> <a name="stage_variable_overrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putDeploymentCanarySettings.parameter.stageVariableOverrides"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#stage_variable_overrides ApigatewayDeployment#stage_variable_overrides}.

---

###### `use_stage_cache`<sup>Optional</sup> <a name="use_stage_cache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putDeploymentCanarySettings.parameter.useStageCache"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#use_stage_cache ApigatewayDeployment#use_stage_cache}.

---

##### `put_stage_description` <a name="put_stage_description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription"></a>

```python
def put_stage_description(
  access_log_setting: ApigatewayDeploymentStageDescriptionAccessLogSetting = None,
  cache_cluster_enabled: bool | IResolvable = None,
  cache_cluster_size: str = None,
  cache_data_encrypted: bool | IResolvable = None,
  cache_ttl_in_seconds: typing.Union[int, float] = None,
  caching_enabled: bool | IResolvable = None,
  canary_setting: ApigatewayDeploymentStageDescriptionCanarySetting = None,
  client_certificate_id: str = None,
  data_trace_enabled: bool | IResolvable = None,
  description: str = None,
  documentation_version: str = None,
  logging_level: str = None,
  method_settings: IResolvable | typing.List[ApigatewayDeploymentStageDescriptionMethodSettings] = None,
  metrics_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[ApigatewayDeploymentStageDescriptionTags] = None,
  throttling_burst_limit: typing.Union[int, float] = None,
  throttling_rate_limit: typing.Union[int, float] = None,
  tracing_enabled: bool | IResolvable = None,
  variables: typing.Mapping[str] = None
) -> None
```

###### `access_log_setting`<sup>Optional</sup> <a name="access_log_setting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.accessLogSetting"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a>

Specifies settings for logging access in this stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#access_log_setting ApigatewayDeployment#access_log_setting}

---

###### `cache_cluster_enabled`<sup>Optional</sup> <a name="cache_cluster_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.cacheClusterEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#cache_cluster_enabled ApigatewayDeployment#cache_cluster_enabled}.

---

###### `cache_cluster_size`<sup>Optional</sup> <a name="cache_cluster_size" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.cacheClusterSize"></a>

- *Type:* str

The size of the stage's cache cluster. For more information, see [cacheClusterSize](https://docs.aws.amazon.com/apigateway/latest/api/API_CreateStage.html#apigw-CreateStage-request-cacheClusterSize) in the *API Gateway API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#cache_cluster_size ApigatewayDeployment#cache_cluster_size}

---

###### `cache_data_encrypted`<sup>Optional</sup> <a name="cache_data_encrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.cacheDataEncrypted"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the cached responses are encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#cache_data_encrypted ApigatewayDeployment#cache_data_encrypted}

---

###### `cache_ttl_in_seconds`<sup>Optional</sup> <a name="cache_ttl_in_seconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.cacheTtlInSeconds"></a>

- *Type:* typing.Union[int, float]

The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#cache_ttl_in_seconds ApigatewayDeployment#cache_ttl_in_seconds}

---

###### `caching_enabled`<sup>Optional</sup> <a name="caching_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.cachingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether responses are cached and returned for requests.

You must enable a cache cluster on the stage to cache responses. For more information, see [Enable API Gateway Caching in a Stage to Enhance API Performance](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html) in the *API Gateway Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#caching_enabled ApigatewayDeployment#caching_enabled}

---

###### `canary_setting`<sup>Optional</sup> <a name="canary_setting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.canarySetting"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a>

Specifies settings for the canary deployment in this stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#canary_setting ApigatewayDeployment#canary_setting}

---

###### `client_certificate_id`<sup>Optional</sup> <a name="client_certificate_id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.clientCertificateId"></a>

- *Type:* str

The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#client_certificate_id ApigatewayDeployment#client_certificate_id}

---

###### `data_trace_enabled`<sup>Optional</sup> <a name="data_trace_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.dataTraceEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether data trace logging is enabled for methods in the stage.

API Gateway pushes these logs to Amazon CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#data_trace_enabled ApigatewayDeployment#data_trace_enabled}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.description"></a>

- *Type:* str

A description of the purpose of the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#description ApigatewayDeployment#description}

---

###### `documentation_version`<sup>Optional</sup> <a name="documentation_version" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.documentationVersion"></a>

- *Type:* str

The version identifier of the API documentation snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#documentation_version ApigatewayDeployment#documentation_version}

---

###### `logging_level`<sup>Optional</sup> <a name="logging_level" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.loggingLevel"></a>

- *Type:* str

The logging level for this method.

For valid values, see the `loggingLevel` property of the [MethodSetting](https://docs.aws.amazon.com/apigateway/latest/api/API_MethodSetting.html) resource in the *Amazon API Gateway API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#logging_level ApigatewayDeployment#logging_level}

---

###### `method_settings`<sup>Optional</sup> <a name="method_settings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.methodSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>]

Configures settings for all of the stage's methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#method_settings ApigatewayDeployment#method_settings}

---

###### `metrics_enabled`<sup>Optional</sup> <a name="metrics_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.metricsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#metrics_enabled ApigatewayDeployment#metrics_enabled}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>]

An array of arbitrary tags (key-value pairs) to associate with the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#tags ApigatewayDeployment#tags}

---

###### `throttling_burst_limit`<sup>Optional</sup> <a name="throttling_burst_limit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.throttlingBurstLimit"></a>

- *Type:* typing.Union[int, float]

The target request burst rate limit.

This allows more requests through for a period of time than the target rate limit. For more information, see [Manage API Request Throttling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the *API Gateway Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#throttling_burst_limit ApigatewayDeployment#throttling_burst_limit}

---

###### `throttling_rate_limit`<sup>Optional</sup> <a name="throttling_rate_limit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.throttlingRateLimit"></a>

- *Type:* typing.Union[int, float]

The target request steady-state rate limit.

For more information, see [Manage API Request Throttling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the *API Gateway Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#throttling_rate_limit ApigatewayDeployment#throttling_rate_limit}

---

###### `tracing_enabled`<sup>Optional</sup> <a name="tracing_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.tracingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether active tracing with X-ray is enabled for this stage.

For more information, see [Trace API Gateway API Execution with X-Ray](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-xray.html) in the *API Gateway Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#tracing_enabled ApigatewayDeployment#tracing_enabled}

---

###### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.variables"></a>

- *Type:* typing.Mapping[str]

A map that defines the stage variables.

Variable names must consist of alphanumeric characters, and the values must match the following regular expression: `[A-Za-z0-9-._~:/?#&=,]+`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#variables ApigatewayDeployment#variables}

---

##### `reset_deployment_canary_settings` <a name="reset_deployment_canary_settings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetDeploymentCanarySettings"></a>

```python
def reset_deployment_canary_settings() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_stage_description` <a name="reset_stage_description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetStageDescription"></a>

```python
def reset_stage_description() -> None
```

##### `reset_stage_name` <a name="reset_stage_name" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetStageName"></a>

```python
def reset_stage_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApigatewayDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isConstruct"></a>

```python
from cdktn_provider_awscc import apigateway_deployment

apigatewayDeployment.ApigatewayDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apigateway_deployment

apigatewayDeployment.ApigatewayDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apigateway_deployment

apigatewayDeployment.ApigatewayDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apigateway_deployment

apigatewayDeployment.ApigatewayDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApigatewayDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigatewayDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigatewayDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentCanarySettings">deployment_canary_settings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference">ApigatewayDeploymentDeploymentCanarySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageDescription">stage_description</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference">ApigatewayDeploymentStageDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentCanarySettingsInput">deployment_canary_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.restApiIdInput">rest_api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageDescriptionInput">stage_description_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageNameInput">stage_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.restApiId">rest_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageName">stage_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deployment_canary_settings`<sup>Required</sup> <a name="deployment_canary_settings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentCanarySettings"></a>

```python
deployment_canary_settings: ApigatewayDeploymentDeploymentCanarySettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference">ApigatewayDeploymentDeploymentCanarySettingsOutputReference</a>

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `stage_description`<sup>Required</sup> <a name="stage_description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageDescription"></a>

```python
stage_description: ApigatewayDeploymentStageDescriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference">ApigatewayDeploymentStageDescriptionOutputReference</a>

---

##### `deployment_canary_settings_input`<sup>Optional</sup> <a name="deployment_canary_settings_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentCanarySettingsInput"></a>

```python
deployment_canary_settings_input: IResolvable | ApigatewayDeploymentDeploymentCanarySettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `rest_api_id_input`<sup>Optional</sup> <a name="rest_api_id_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.restApiIdInput"></a>

```python
rest_api_id_input: str
```

- *Type:* str

---

##### `stage_description_input`<sup>Optional</sup> <a name="stage_description_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageDescriptionInput"></a>

```python
stage_description_input: IResolvable | ApigatewayDeploymentStageDescription
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a>

---

##### `stage_name_input`<sup>Optional</sup> <a name="stage_name_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageNameInput"></a>

```python
stage_name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

---

##### `stage_name`<sup>Required</sup> <a name="stage_name" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageName"></a>

```python
stage_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayDeploymentConfig <a name="ApigatewayDeploymentConfig" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_deployment

apigatewayDeployment.ApigatewayDeploymentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rest_api_id: str,
  deployment_canary_settings: ApigatewayDeploymentDeploymentCanarySettings = None,
  description: str = None,
  stage_description: ApigatewayDeploymentStageDescription = None,
  stage_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#rest_api_id ApigatewayDeployment#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.deploymentCanarySettings">deployment_canary_settings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a></code> | The ``DeploymentCanarySettings`` property type specifies settings for the canary deployment. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#description ApigatewayDeployment#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.stageDescription">stage_description</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a></code> | The description of the Stage resource for the Deployment resource to create. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.stageName">stage_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#stage_name ApigatewayDeployment#stage_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#rest_api_id ApigatewayDeployment#rest_api_id}.

---

##### `deployment_canary_settings`<sup>Optional</sup> <a name="deployment_canary_settings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.deploymentCanarySettings"></a>

```python
deployment_canary_settings: ApigatewayDeploymentDeploymentCanarySettings
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a>

The ``DeploymentCanarySettings`` property type specifies settings for the canary deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#deployment_canary_settings ApigatewayDeployment#deployment_canary_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#description ApigatewayDeployment#description}.

---

##### `stage_description`<sup>Optional</sup> <a name="stage_description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.stageDescription"></a>

```python
stage_description: ApigatewayDeploymentStageDescription
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a>

The description of the Stage resource for the Deployment resource to create.

To specify a stage description, you must also provide a stage name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#stage_description ApigatewayDeployment#stage_description}

---

##### `stage_name`<sup>Optional</sup> <a name="stage_name" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.stageName"></a>

```python
stage_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#stage_name ApigatewayDeployment#stage_name}.

---

### ApigatewayDeploymentDeploymentCanarySettings <a name="ApigatewayDeploymentDeploymentCanarySettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_deployment

apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings(
  percent_traffic: typing.Union[int, float] = None,
  stage_variable_overrides: typing.Mapping[str] = None,
  use_stage_cache: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.percentTraffic">percent_traffic</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#percent_traffic ApigatewayDeployment#percent_traffic}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.stageVariableOverrides">stage_variable_overrides</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#stage_variable_overrides ApigatewayDeployment#stage_variable_overrides}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.useStageCache">use_stage_cache</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#use_stage_cache ApigatewayDeployment#use_stage_cache}. |

---

##### `percent_traffic`<sup>Optional</sup> <a name="percent_traffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.percentTraffic"></a>

```python
percent_traffic: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#percent_traffic ApigatewayDeployment#percent_traffic}.

---

##### `stage_variable_overrides`<sup>Optional</sup> <a name="stage_variable_overrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.stageVariableOverrides"></a>

```python
stage_variable_overrides: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#stage_variable_overrides ApigatewayDeployment#stage_variable_overrides}.

---

##### `use_stage_cache`<sup>Optional</sup> <a name="use_stage_cache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.useStageCache"></a>

```python
use_stage_cache: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#use_stage_cache ApigatewayDeployment#use_stage_cache}.

---

### ApigatewayDeploymentStageDescription <a name="ApigatewayDeploymentStageDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_deployment

apigatewayDeployment.ApigatewayDeploymentStageDescription(
  access_log_setting: ApigatewayDeploymentStageDescriptionAccessLogSetting = None,
  cache_cluster_enabled: bool | IResolvable = None,
  cache_cluster_size: str = None,
  cache_data_encrypted: bool | IResolvable = None,
  cache_ttl_in_seconds: typing.Union[int, float] = None,
  caching_enabled: bool | IResolvable = None,
  canary_setting: ApigatewayDeploymentStageDescriptionCanarySetting = None,
  client_certificate_id: str = None,
  data_trace_enabled: bool | IResolvable = None,
  description: str = None,
  documentation_version: str = None,
  logging_level: str = None,
  method_settings: IResolvable | typing.List[ApigatewayDeploymentStageDescriptionMethodSettings] = None,
  metrics_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[ApigatewayDeploymentStageDescriptionTags] = None,
  throttling_burst_limit: typing.Union[int, float] = None,
  throttling_rate_limit: typing.Union[int, float] = None,
  tracing_enabled: bool | IResolvable = None,
  variables: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.accessLogSetting">access_log_setting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a></code> | Specifies settings for logging access in this stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheClusterEnabled">cache_cluster_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#cache_cluster_enabled ApigatewayDeployment#cache_cluster_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheClusterSize">cache_cluster_size</a></code> | <code>str</code> | The size of the stage's cache cluster. For more information, see [cacheClusterSize](https://docs.aws.amazon.com/apigateway/latest/api/API_CreateStage.html#apigw-CreateStage-request-cacheClusterSize) in the *API Gateway API Reference*. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheDataEncrypted">cache_data_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the cached responses are encrypted. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheTtlInSeconds">cache_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cachingEnabled">caching_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether responses are cached and returned for requests. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.canarySetting">canary_setting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a></code> | Specifies settings for the canary deployment in this stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.clientCertificateId">client_certificate_id</a></code> | <code>str</code> | The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.dataTraceEnabled">data_trace_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether data trace logging is enabled for methods in the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.description">description</a></code> | <code>str</code> | A description of the purpose of the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.documentationVersion">documentation_version</a></code> | <code>str</code> | The version identifier of the API documentation snapshot. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.loggingLevel">logging_level</a></code> | <code>str</code> | The logging level for this method. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.methodSettings">method_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>]</code> | Configures settings for all of the stage's methods. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.metricsEnabled">metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>]</code> | An array of arbitrary tags (key-value pairs) to associate with the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.throttlingBurstLimit">throttling_burst_limit</a></code> | <code>typing.Union[int, float]</code> | The target request burst rate limit. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.throttlingRateLimit">throttling_rate_limit</a></code> | <code>typing.Union[int, float]</code> | The target request steady-state rate limit. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.tracingEnabled">tracing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether active tracing with X-ray is enabled for this stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.variables">variables</a></code> | <code>typing.Mapping[str]</code> | A map that defines the stage variables. |

---

##### `access_log_setting`<sup>Optional</sup> <a name="access_log_setting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.accessLogSetting"></a>

```python
access_log_setting: ApigatewayDeploymentStageDescriptionAccessLogSetting
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a>

Specifies settings for logging access in this stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#access_log_setting ApigatewayDeployment#access_log_setting}

---

##### `cache_cluster_enabled`<sup>Optional</sup> <a name="cache_cluster_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheClusterEnabled"></a>

```python
cache_cluster_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#cache_cluster_enabled ApigatewayDeployment#cache_cluster_enabled}.

---

##### `cache_cluster_size`<sup>Optional</sup> <a name="cache_cluster_size" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheClusterSize"></a>

```python
cache_cluster_size: str
```

- *Type:* str

The size of the stage's cache cluster. For more information, see [cacheClusterSize](https://docs.aws.amazon.com/apigateway/latest/api/API_CreateStage.html#apigw-CreateStage-request-cacheClusterSize) in the *API Gateway API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#cache_cluster_size ApigatewayDeployment#cache_cluster_size}

---

##### `cache_data_encrypted`<sup>Optional</sup> <a name="cache_data_encrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheDataEncrypted"></a>

```python
cache_data_encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the cached responses are encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#cache_data_encrypted ApigatewayDeployment#cache_data_encrypted}

---

##### `cache_ttl_in_seconds`<sup>Optional</sup> <a name="cache_ttl_in_seconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheTtlInSeconds"></a>

```python
cache_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#cache_ttl_in_seconds ApigatewayDeployment#cache_ttl_in_seconds}

---

##### `caching_enabled`<sup>Optional</sup> <a name="caching_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cachingEnabled"></a>

```python
caching_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether responses are cached and returned for requests.

You must enable a cache cluster on the stage to cache responses. For more information, see [Enable API Gateway Caching in a Stage to Enhance API Performance](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html) in the *API Gateway Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#caching_enabled ApigatewayDeployment#caching_enabled}

---

##### `canary_setting`<sup>Optional</sup> <a name="canary_setting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.canarySetting"></a>

```python
canary_setting: ApigatewayDeploymentStageDescriptionCanarySetting
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a>

Specifies settings for the canary deployment in this stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#canary_setting ApigatewayDeployment#canary_setting}

---

##### `client_certificate_id`<sup>Optional</sup> <a name="client_certificate_id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.clientCertificateId"></a>

```python
client_certificate_id: str
```

- *Type:* str

The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#client_certificate_id ApigatewayDeployment#client_certificate_id}

---

##### `data_trace_enabled`<sup>Optional</sup> <a name="data_trace_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.dataTraceEnabled"></a>

```python
data_trace_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether data trace logging is enabled for methods in the stage.

API Gateway pushes these logs to Amazon CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#data_trace_enabled ApigatewayDeployment#data_trace_enabled}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the purpose of the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#description ApigatewayDeployment#description}

---

##### `documentation_version`<sup>Optional</sup> <a name="documentation_version" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.documentationVersion"></a>

```python
documentation_version: str
```

- *Type:* str

The version identifier of the API documentation snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#documentation_version ApigatewayDeployment#documentation_version}

---

##### `logging_level`<sup>Optional</sup> <a name="logging_level" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.loggingLevel"></a>

```python
logging_level: str
```

- *Type:* str

The logging level for this method.

For valid values, see the `loggingLevel` property of the [MethodSetting](https://docs.aws.amazon.com/apigateway/latest/api/API_MethodSetting.html) resource in the *Amazon API Gateway API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#logging_level ApigatewayDeployment#logging_level}

---

##### `method_settings`<sup>Optional</sup> <a name="method_settings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.methodSettings"></a>

```python
method_settings: IResolvable | typing.List[ApigatewayDeploymentStageDescriptionMethodSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>]

Configures settings for all of the stage's methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#method_settings ApigatewayDeployment#method_settings}

---

##### `metrics_enabled`<sup>Optional</sup> <a name="metrics_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.metricsEnabled"></a>

```python
metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#metrics_enabled ApigatewayDeployment#metrics_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.tags"></a>

```python
tags: IResolvable | typing.List[ApigatewayDeploymentStageDescriptionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>]

An array of arbitrary tags (key-value pairs) to associate with the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#tags ApigatewayDeployment#tags}

---

##### `throttling_burst_limit`<sup>Optional</sup> <a name="throttling_burst_limit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.throttlingBurstLimit"></a>

```python
throttling_burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The target request burst rate limit.

This allows more requests through for a period of time than the target rate limit. For more information, see [Manage API Request Throttling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the *API Gateway Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#throttling_burst_limit ApigatewayDeployment#throttling_burst_limit}

---

##### `throttling_rate_limit`<sup>Optional</sup> <a name="throttling_rate_limit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.throttlingRateLimit"></a>

```python
throttling_rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The target request steady-state rate limit.

For more information, see [Manage API Request Throttling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the *API Gateway Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#throttling_rate_limit ApigatewayDeployment#throttling_rate_limit}

---

##### `tracing_enabled`<sup>Optional</sup> <a name="tracing_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.tracingEnabled"></a>

```python
tracing_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether active tracing with X-ray is enabled for this stage.

For more information, see [Trace API Gateway API Execution with X-Ray](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-xray.html) in the *API Gateway Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#tracing_enabled ApigatewayDeployment#tracing_enabled}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.variables"></a>

```python
variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map that defines the stage variables.

Variable names must consist of alphanumeric characters, and the values must match the following regular expression: `[A-Za-z0-9-._~:/?#&=,]+`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#variables ApigatewayDeployment#variables}

---

### ApigatewayDeploymentStageDescriptionAccessLogSetting <a name="ApigatewayDeploymentStageDescriptionAccessLogSetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_deployment

apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting(
  destination_arn: str = None,
  format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting.property.destinationArn">destination_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#destination_arn ApigatewayDeployment#destination_arn}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#format ApigatewayDeployment#format}. |

---

##### `destination_arn`<sup>Optional</sup> <a name="destination_arn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#destination_arn ApigatewayDeployment#destination_arn}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#format ApigatewayDeployment#format}.

---

### ApigatewayDeploymentStageDescriptionCanarySetting <a name="ApigatewayDeploymentStageDescriptionCanarySetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_deployment

apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting(
  percent_traffic: typing.Union[int, float] = None,
  stage_variable_overrides: typing.Mapping[str] = None,
  use_stage_cache: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.percentTraffic">percent_traffic</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#percent_traffic ApigatewayDeployment#percent_traffic}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.stageVariableOverrides">stage_variable_overrides</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#stage_variable_overrides ApigatewayDeployment#stage_variable_overrides}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.useStageCache">use_stage_cache</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#use_stage_cache ApigatewayDeployment#use_stage_cache}. |

---

##### `percent_traffic`<sup>Optional</sup> <a name="percent_traffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.percentTraffic"></a>

```python
percent_traffic: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#percent_traffic ApigatewayDeployment#percent_traffic}.

---

##### `stage_variable_overrides`<sup>Optional</sup> <a name="stage_variable_overrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.stageVariableOverrides"></a>

```python
stage_variable_overrides: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#stage_variable_overrides ApigatewayDeployment#stage_variable_overrides}.

---

##### `use_stage_cache`<sup>Optional</sup> <a name="use_stage_cache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.useStageCache"></a>

```python
use_stage_cache: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#use_stage_cache ApigatewayDeployment#use_stage_cache}.

---

### ApigatewayDeploymentStageDescriptionMethodSettings <a name="ApigatewayDeploymentStageDescriptionMethodSettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_deployment

apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings(
  cache_data_encrypted: bool | IResolvable = None,
  cache_ttl_in_seconds: typing.Union[int, float] = None,
  caching_enabled: bool | IResolvable = None,
  data_trace_enabled: bool | IResolvable = None,
  http_method: str = None,
  logging_level: str = None,
  metrics_enabled: bool | IResolvable = None,
  resource_path: str = None,
  throttling_burst_limit: typing.Union[int, float] = None,
  throttling_rate_limit: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cacheDataEncrypted">cache_data_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#cache_data_encrypted ApigatewayDeployment#cache_data_encrypted}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cacheTtlInSeconds">cache_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#cache_ttl_in_seconds ApigatewayDeployment#cache_ttl_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cachingEnabled">caching_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#caching_enabled ApigatewayDeployment#caching_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.dataTraceEnabled">data_trace_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#data_trace_enabled ApigatewayDeployment#data_trace_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.httpMethod">http_method</a></code> | <code>str</code> | The HTTP method. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.loggingLevel">logging_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#logging_level ApigatewayDeployment#logging_level}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.metricsEnabled">metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#metrics_enabled ApigatewayDeployment#metrics_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.resourcePath">resource_path</a></code> | <code>str</code> | The resource path for this method. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.throttlingBurstLimit">throttling_burst_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#throttling_burst_limit ApigatewayDeployment#throttling_burst_limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.throttlingRateLimit">throttling_rate_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#throttling_rate_limit ApigatewayDeployment#throttling_rate_limit}. |

---

##### `cache_data_encrypted`<sup>Optional</sup> <a name="cache_data_encrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cacheDataEncrypted"></a>

```python
cache_data_encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#cache_data_encrypted ApigatewayDeployment#cache_data_encrypted}.

---

##### `cache_ttl_in_seconds`<sup>Optional</sup> <a name="cache_ttl_in_seconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cacheTtlInSeconds"></a>

```python
cache_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#cache_ttl_in_seconds ApigatewayDeployment#cache_ttl_in_seconds}.

---

##### `caching_enabled`<sup>Optional</sup> <a name="caching_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cachingEnabled"></a>

```python
caching_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#caching_enabled ApigatewayDeployment#caching_enabled}.

---

##### `data_trace_enabled`<sup>Optional</sup> <a name="data_trace_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.dataTraceEnabled"></a>

```python
data_trace_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#data_trace_enabled ApigatewayDeployment#data_trace_enabled}.

---

##### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

The HTTP method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#http_method ApigatewayDeployment#http_method}

---

##### `logging_level`<sup>Optional</sup> <a name="logging_level" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.loggingLevel"></a>

```python
logging_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#logging_level ApigatewayDeployment#logging_level}.

---

##### `metrics_enabled`<sup>Optional</sup> <a name="metrics_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.metricsEnabled"></a>

```python
metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#metrics_enabled ApigatewayDeployment#metrics_enabled}.

---

##### `resource_path`<sup>Optional</sup> <a name="resource_path" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.resourcePath"></a>

```python
resource_path: str
```

- *Type:* str

The resource path for this method.

Forward slashes (`/`) are encoded as `~1` and the initial slash must include a forward slash. For example, the path value `/resource/subresource` must be encoded as `/~1resource~1subresource`. To specify the root path, use only a slash (`/`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#resource_path ApigatewayDeployment#resource_path}

---

##### `throttling_burst_limit`<sup>Optional</sup> <a name="throttling_burst_limit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.throttlingBurstLimit"></a>

```python
throttling_burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#throttling_burst_limit ApigatewayDeployment#throttling_burst_limit}.

---

##### `throttling_rate_limit`<sup>Optional</sup> <a name="throttling_rate_limit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.throttlingRateLimit"></a>

```python
throttling_rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#throttling_rate_limit ApigatewayDeployment#throttling_rate_limit}.

---

### ApigatewayDeploymentStageDescriptionTags <a name="ApigatewayDeploymentStageDescriptionTags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_deployment

apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags.property.key">key</a></code> | <code>str</code> | A string you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags.property.value">value</a></code> | <code>str</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags.property.key"></a>

```python
key: str
```

- *Type:* str

A string you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#key ApigatewayDeployment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#value ApigatewayDeployment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayDeploymentDeploymentCanarySettingsOutputReference <a name="ApigatewayDeploymentDeploymentCanarySettingsOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_deployment

apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetPercentTraffic">reset_percent_traffic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetStageVariableOverrides">reset_stage_variable_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetUseStageCache">reset_use_stage_cache</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_percent_traffic` <a name="reset_percent_traffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetPercentTraffic"></a>

```python
def reset_percent_traffic() -> None
```

##### `reset_stage_variable_overrides` <a name="reset_stage_variable_overrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetStageVariableOverrides"></a>

```python
def reset_stage_variable_overrides() -> None
```

##### `reset_use_stage_cache` <a name="reset_use_stage_cache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetUseStageCache"></a>

```python
def reset_use_stage_cache() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.percentTrafficInput">percent_traffic_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.stageVariableOverridesInput">stage_variable_overrides_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.useStageCacheInput">use_stage_cache_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.percentTraffic">percent_traffic</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.stageVariableOverrides">stage_variable_overrides</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.useStageCache">use_stage_cache</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percent_traffic_input`<sup>Optional</sup> <a name="percent_traffic_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.percentTrafficInput"></a>

```python
percent_traffic_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stage_variable_overrides_input`<sup>Optional</sup> <a name="stage_variable_overrides_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.stageVariableOverridesInput"></a>

```python
stage_variable_overrides_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_stage_cache_input`<sup>Optional</sup> <a name="use_stage_cache_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.useStageCacheInput"></a>

```python
use_stage_cache_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `percent_traffic`<sup>Required</sup> <a name="percent_traffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.percentTraffic"></a>

```python
percent_traffic: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stage_variable_overrides`<sup>Required</sup> <a name="stage_variable_overrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.stageVariableOverrides"></a>

```python
stage_variable_overrides: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_stage_cache`<sup>Required</sup> <a name="use_stage_cache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.useStageCache"></a>

```python
use_stage_cache: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigatewayDeploymentDeploymentCanarySettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a>

---


### ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference <a name="ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_deployment

apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resetDestinationArn">reset_destination_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resetFormat">reset_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_arn` <a name="reset_destination_arn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resetDestinationArn"></a>

```python
def reset_destination_arn() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.destinationArnInput">destination_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.destinationArn">destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_arn_input`<sup>Optional</sup> <a name="destination_arn_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.destinationArnInput"></a>

```python
destination_arn_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigatewayDeploymentStageDescriptionAccessLogSetting
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a>

---


### ApigatewayDeploymentStageDescriptionCanarySettingOutputReference <a name="ApigatewayDeploymentStageDescriptionCanarySettingOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_deployment

apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetPercentTraffic">reset_percent_traffic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetStageVariableOverrides">reset_stage_variable_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetUseStageCache">reset_use_stage_cache</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_percent_traffic` <a name="reset_percent_traffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetPercentTraffic"></a>

```python
def reset_percent_traffic() -> None
```

##### `reset_stage_variable_overrides` <a name="reset_stage_variable_overrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetStageVariableOverrides"></a>

```python
def reset_stage_variable_overrides() -> None
```

##### `reset_use_stage_cache` <a name="reset_use_stage_cache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetUseStageCache"></a>

```python
def reset_use_stage_cache() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.percentTrafficInput">percent_traffic_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.stageVariableOverridesInput">stage_variable_overrides_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.useStageCacheInput">use_stage_cache_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.percentTraffic">percent_traffic</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.stageVariableOverrides">stage_variable_overrides</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.useStageCache">use_stage_cache</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percent_traffic_input`<sup>Optional</sup> <a name="percent_traffic_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.percentTrafficInput"></a>

```python
percent_traffic_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stage_variable_overrides_input`<sup>Optional</sup> <a name="stage_variable_overrides_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.stageVariableOverridesInput"></a>

```python
stage_variable_overrides_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_stage_cache_input`<sup>Optional</sup> <a name="use_stage_cache_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.useStageCacheInput"></a>

```python
use_stage_cache_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `percent_traffic`<sup>Required</sup> <a name="percent_traffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.percentTraffic"></a>

```python
percent_traffic: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stage_variable_overrides`<sup>Required</sup> <a name="stage_variable_overrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.stageVariableOverrides"></a>

```python
stage_variable_overrides: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_stage_cache`<sup>Required</sup> <a name="use_stage_cache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.useStageCache"></a>

```python
use_stage_cache: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigatewayDeploymentStageDescriptionCanarySetting
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a>

---


### ApigatewayDeploymentStageDescriptionMethodSettingsList <a name="ApigatewayDeploymentStageDescriptionMethodSettingsList" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_deployment

apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApigatewayDeploymentStageDescriptionMethodSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>]

---


### ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference <a name="ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_deployment

apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCacheDataEncrypted">reset_cache_data_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCacheTtlInSeconds">reset_cache_ttl_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCachingEnabled">reset_caching_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetDataTraceEnabled">reset_data_trace_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetHttpMethod">reset_http_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetLoggingLevel">reset_logging_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetMetricsEnabled">reset_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetResourcePath">reset_resource_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetThrottlingBurstLimit">reset_throttling_burst_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetThrottlingRateLimit">reset_throttling_rate_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cache_data_encrypted` <a name="reset_cache_data_encrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCacheDataEncrypted"></a>

```python
def reset_cache_data_encrypted() -> None
```

##### `reset_cache_ttl_in_seconds` <a name="reset_cache_ttl_in_seconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCacheTtlInSeconds"></a>

```python
def reset_cache_ttl_in_seconds() -> None
```

##### `reset_caching_enabled` <a name="reset_caching_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCachingEnabled"></a>

```python
def reset_caching_enabled() -> None
```

##### `reset_data_trace_enabled` <a name="reset_data_trace_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetDataTraceEnabled"></a>

```python
def reset_data_trace_enabled() -> None
```

##### `reset_http_method` <a name="reset_http_method" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetHttpMethod"></a>

```python
def reset_http_method() -> None
```

##### `reset_logging_level` <a name="reset_logging_level" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetLoggingLevel"></a>

```python
def reset_logging_level() -> None
```

##### `reset_metrics_enabled` <a name="reset_metrics_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetMetricsEnabled"></a>

```python
def reset_metrics_enabled() -> None
```

##### `reset_resource_path` <a name="reset_resource_path" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetResourcePath"></a>

```python
def reset_resource_path() -> None
```

##### `reset_throttling_burst_limit` <a name="reset_throttling_burst_limit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetThrottlingBurstLimit"></a>

```python
def reset_throttling_burst_limit() -> None
```

##### `reset_throttling_rate_limit` <a name="reset_throttling_rate_limit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetThrottlingRateLimit"></a>

```python
def reset_throttling_rate_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheDataEncryptedInput">cache_data_encrypted_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheTtlInSecondsInput">cache_ttl_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cachingEnabledInput">caching_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.dataTraceEnabledInput">data_trace_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.httpMethodInput">http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.loggingLevelInput">logging_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.metricsEnabledInput">metrics_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.resourcePathInput">resource_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingBurstLimitInput">throttling_burst_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingRateLimitInput">throttling_rate_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheDataEncrypted">cache_data_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheTtlInSeconds">cache_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cachingEnabled">caching_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.dataTraceEnabled">data_trace_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.loggingLevel">logging_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.metricsEnabled">metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.resourcePath">resource_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingBurstLimit">throttling_burst_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingRateLimit">throttling_rate_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_data_encrypted_input`<sup>Optional</sup> <a name="cache_data_encrypted_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheDataEncryptedInput"></a>

```python
cache_data_encrypted_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cache_ttl_in_seconds_input`<sup>Optional</sup> <a name="cache_ttl_in_seconds_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheTtlInSecondsInput"></a>

```python
cache_ttl_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `caching_enabled_input`<sup>Optional</sup> <a name="caching_enabled_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cachingEnabledInput"></a>

```python
caching_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_trace_enabled_input`<sup>Optional</sup> <a name="data_trace_enabled_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.dataTraceEnabledInput"></a>

```python
data_trace_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `http_method_input`<sup>Optional</sup> <a name="http_method_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.httpMethodInput"></a>

```python
http_method_input: str
```

- *Type:* str

---

##### `logging_level_input`<sup>Optional</sup> <a name="logging_level_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.loggingLevelInput"></a>

```python
logging_level_input: str
```

- *Type:* str

---

##### `metrics_enabled_input`<sup>Optional</sup> <a name="metrics_enabled_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.metricsEnabledInput"></a>

```python
metrics_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resource_path_input`<sup>Optional</sup> <a name="resource_path_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.resourcePathInput"></a>

```python
resource_path_input: str
```

- *Type:* str

---

##### `throttling_burst_limit_input`<sup>Optional</sup> <a name="throttling_burst_limit_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```python
throttling_burst_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttling_rate_limit_input`<sup>Optional</sup> <a name="throttling_rate_limit_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingRateLimitInput"></a>

```python
throttling_rate_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cache_data_encrypted`<sup>Required</sup> <a name="cache_data_encrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheDataEncrypted"></a>

```python
cache_data_encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cache_ttl_in_seconds`<sup>Required</sup> <a name="cache_ttl_in_seconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheTtlInSeconds"></a>

```python
cache_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `caching_enabled`<sup>Required</sup> <a name="caching_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cachingEnabled"></a>

```python
caching_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_trace_enabled`<sup>Required</sup> <a name="data_trace_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.dataTraceEnabled"></a>

```python
data_trace_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `logging_level`<sup>Required</sup> <a name="logging_level" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.loggingLevel"></a>

```python
logging_level: str
```

- *Type:* str

---

##### `metrics_enabled`<sup>Required</sup> <a name="metrics_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.metricsEnabled"></a>

```python
metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resource_path`<sup>Required</sup> <a name="resource_path" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.resourcePath"></a>

```python
resource_path: str
```

- *Type:* str

---

##### `throttling_burst_limit`<sup>Required</sup> <a name="throttling_burst_limit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingBurstLimit"></a>

```python
throttling_burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttling_rate_limit`<sup>Required</sup> <a name="throttling_rate_limit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingRateLimit"></a>

```python
throttling_rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigatewayDeploymentStageDescriptionMethodSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>

---


### ApigatewayDeploymentStageDescriptionOutputReference <a name="ApigatewayDeploymentStageDescriptionOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_deployment

apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putAccessLogSetting">put_access_log_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putCanarySetting">put_canary_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putMethodSettings">put_method_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetAccessLogSetting">reset_access_log_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheClusterEnabled">reset_cache_cluster_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheClusterSize">reset_cache_cluster_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheDataEncrypted">reset_cache_data_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheTtlInSeconds">reset_cache_ttl_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCachingEnabled">reset_caching_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCanarySetting">reset_canary_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetClientCertificateId">reset_client_certificate_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDataTraceEnabled">reset_data_trace_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDocumentationVersion">reset_documentation_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetLoggingLevel">reset_logging_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetMethodSettings">reset_method_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetMetricsEnabled">reset_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetThrottlingBurstLimit">reset_throttling_burst_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetThrottlingRateLimit">reset_throttling_rate_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetTracingEnabled">reset_tracing_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetVariables">reset_variables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_log_setting` <a name="put_access_log_setting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putAccessLogSetting"></a>

```python
def put_access_log_setting(
  destination_arn: str = None,
  format: str = None
) -> None
```

###### `destination_arn`<sup>Optional</sup> <a name="destination_arn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putAccessLogSetting.parameter.destinationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#destination_arn ApigatewayDeployment#destination_arn}.

---

###### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putAccessLogSetting.parameter.format"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#format ApigatewayDeployment#format}.

---

##### `put_canary_setting` <a name="put_canary_setting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putCanarySetting"></a>

```python
def put_canary_setting(
  percent_traffic: typing.Union[int, float] = None,
  stage_variable_overrides: typing.Mapping[str] = None,
  use_stage_cache: bool | IResolvable = None
) -> None
```

###### `percent_traffic`<sup>Optional</sup> <a name="percent_traffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putCanarySetting.parameter.percentTraffic"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#percent_traffic ApigatewayDeployment#percent_traffic}.

---

###### `stage_variable_overrides`<sup>Optional</sup> <a name="stage_variable_overrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putCanarySetting.parameter.stageVariableOverrides"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#stage_variable_overrides ApigatewayDeployment#stage_variable_overrides}.

---

###### `use_stage_cache`<sup>Optional</sup> <a name="use_stage_cache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putCanarySetting.parameter.useStageCache"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/apigateway_deployment#use_stage_cache ApigatewayDeployment#use_stage_cache}.

---

##### `put_method_settings` <a name="put_method_settings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putMethodSettings"></a>

```python
def put_method_settings(
  value: IResolvable | typing.List[ApigatewayDeploymentStageDescriptionMethodSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putMethodSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ApigatewayDeploymentStageDescriptionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>]

---

##### `reset_access_log_setting` <a name="reset_access_log_setting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetAccessLogSetting"></a>

```python
def reset_access_log_setting() -> None
```

##### `reset_cache_cluster_enabled` <a name="reset_cache_cluster_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheClusterEnabled"></a>

```python
def reset_cache_cluster_enabled() -> None
```

##### `reset_cache_cluster_size` <a name="reset_cache_cluster_size" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheClusterSize"></a>

```python
def reset_cache_cluster_size() -> None
```

##### `reset_cache_data_encrypted` <a name="reset_cache_data_encrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheDataEncrypted"></a>

```python
def reset_cache_data_encrypted() -> None
```

##### `reset_cache_ttl_in_seconds` <a name="reset_cache_ttl_in_seconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheTtlInSeconds"></a>

```python
def reset_cache_ttl_in_seconds() -> None
```

##### `reset_caching_enabled` <a name="reset_caching_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCachingEnabled"></a>

```python
def reset_caching_enabled() -> None
```

##### `reset_canary_setting` <a name="reset_canary_setting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCanarySetting"></a>

```python
def reset_canary_setting() -> None
```

##### `reset_client_certificate_id` <a name="reset_client_certificate_id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetClientCertificateId"></a>

```python
def reset_client_certificate_id() -> None
```

##### `reset_data_trace_enabled` <a name="reset_data_trace_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDataTraceEnabled"></a>

```python
def reset_data_trace_enabled() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_documentation_version` <a name="reset_documentation_version" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDocumentationVersion"></a>

```python
def reset_documentation_version() -> None
```

##### `reset_logging_level` <a name="reset_logging_level" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetLoggingLevel"></a>

```python
def reset_logging_level() -> None
```

##### `reset_method_settings` <a name="reset_method_settings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetMethodSettings"></a>

```python
def reset_method_settings() -> None
```

##### `reset_metrics_enabled` <a name="reset_metrics_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetMetricsEnabled"></a>

```python
def reset_metrics_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_throttling_burst_limit` <a name="reset_throttling_burst_limit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetThrottlingBurstLimit"></a>

```python
def reset_throttling_burst_limit() -> None
```

##### `reset_throttling_rate_limit` <a name="reset_throttling_rate_limit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetThrottlingRateLimit"></a>

```python
def reset_throttling_rate_limit() -> None
```

##### `reset_tracing_enabled` <a name="reset_tracing_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetTracingEnabled"></a>

```python
def reset_tracing_enabled() -> None
```

##### `reset_variables` <a name="reset_variables" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetVariables"></a>

```python
def reset_variables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.accessLogSetting">access_log_setting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference">ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.canarySetting">canary_setting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference">ApigatewayDeploymentStageDescriptionCanarySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.methodSettings">method_settings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList">ApigatewayDeploymentStageDescriptionMethodSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList">ApigatewayDeploymentStageDescriptionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.accessLogSettingInput">access_log_setting_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterEnabledInput">cache_cluster_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterSizeInput">cache_cluster_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheDataEncryptedInput">cache_data_encrypted_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheTtlInSecondsInput">cache_ttl_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cachingEnabledInput">caching_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.canarySettingInput">canary_setting_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.clientCertificateIdInput">client_certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.dataTraceEnabledInput">data_trace_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.documentationVersionInput">documentation_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.loggingLevelInput">logging_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.methodSettingsInput">method_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.metricsEnabledInput">metrics_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingBurstLimitInput">throttling_burst_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingRateLimitInput">throttling_rate_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tracingEnabledInput">tracing_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.variablesInput">variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterEnabled">cache_cluster_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterSize">cache_cluster_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheDataEncrypted">cache_data_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheTtlInSeconds">cache_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cachingEnabled">caching_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.clientCertificateId">client_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.dataTraceEnabled">data_trace_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.documentationVersion">documentation_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.loggingLevel">logging_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.metricsEnabled">metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingBurstLimit">throttling_burst_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingRateLimit">throttling_rate_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tracingEnabled">tracing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.variables">variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_log_setting`<sup>Required</sup> <a name="access_log_setting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.accessLogSetting"></a>

```python
access_log_setting: ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference">ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference</a>

---

##### `canary_setting`<sup>Required</sup> <a name="canary_setting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.canarySetting"></a>

```python
canary_setting: ApigatewayDeploymentStageDescriptionCanarySettingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference">ApigatewayDeploymentStageDescriptionCanarySettingOutputReference</a>

---

##### `method_settings`<sup>Required</sup> <a name="method_settings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.methodSettings"></a>

```python
method_settings: ApigatewayDeploymentStageDescriptionMethodSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList">ApigatewayDeploymentStageDescriptionMethodSettingsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tags"></a>

```python
tags: ApigatewayDeploymentStageDescriptionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList">ApigatewayDeploymentStageDescriptionTagsList</a>

---

##### `access_log_setting_input`<sup>Optional</sup> <a name="access_log_setting_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.accessLogSettingInput"></a>

```python
access_log_setting_input: IResolvable | ApigatewayDeploymentStageDescriptionAccessLogSetting
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a>

---

##### `cache_cluster_enabled_input`<sup>Optional</sup> <a name="cache_cluster_enabled_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterEnabledInput"></a>

```python
cache_cluster_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cache_cluster_size_input`<sup>Optional</sup> <a name="cache_cluster_size_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterSizeInput"></a>

```python
cache_cluster_size_input: str
```

- *Type:* str

---

##### `cache_data_encrypted_input`<sup>Optional</sup> <a name="cache_data_encrypted_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheDataEncryptedInput"></a>

```python
cache_data_encrypted_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cache_ttl_in_seconds_input`<sup>Optional</sup> <a name="cache_ttl_in_seconds_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheTtlInSecondsInput"></a>

```python
cache_ttl_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `caching_enabled_input`<sup>Optional</sup> <a name="caching_enabled_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cachingEnabledInput"></a>

```python
caching_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `canary_setting_input`<sup>Optional</sup> <a name="canary_setting_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.canarySettingInput"></a>

```python
canary_setting_input: IResolvable | ApigatewayDeploymentStageDescriptionCanarySetting
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a>

---

##### `client_certificate_id_input`<sup>Optional</sup> <a name="client_certificate_id_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.clientCertificateIdInput"></a>

```python
client_certificate_id_input: str
```

- *Type:* str

---

##### `data_trace_enabled_input`<sup>Optional</sup> <a name="data_trace_enabled_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.dataTraceEnabledInput"></a>

```python
data_trace_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `documentation_version_input`<sup>Optional</sup> <a name="documentation_version_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.documentationVersionInput"></a>

```python
documentation_version_input: str
```

- *Type:* str

---

##### `logging_level_input`<sup>Optional</sup> <a name="logging_level_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.loggingLevelInput"></a>

```python
logging_level_input: str
```

- *Type:* str

---

##### `method_settings_input`<sup>Optional</sup> <a name="method_settings_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.methodSettingsInput"></a>

```python
method_settings_input: IResolvable | typing.List[ApigatewayDeploymentStageDescriptionMethodSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>]

---

##### `metrics_enabled_input`<sup>Optional</sup> <a name="metrics_enabled_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.metricsEnabledInput"></a>

```python
metrics_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ApigatewayDeploymentStageDescriptionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>]

---

##### `throttling_burst_limit_input`<sup>Optional</sup> <a name="throttling_burst_limit_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingBurstLimitInput"></a>

```python
throttling_burst_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttling_rate_limit_input`<sup>Optional</sup> <a name="throttling_rate_limit_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingRateLimitInput"></a>

```python
throttling_rate_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tracing_enabled_input`<sup>Optional</sup> <a name="tracing_enabled_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tracingEnabledInput"></a>

```python
tracing_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `variables_input`<sup>Optional</sup> <a name="variables_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.variablesInput"></a>

```python
variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `cache_cluster_enabled`<sup>Required</sup> <a name="cache_cluster_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterEnabled"></a>

```python
cache_cluster_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cache_cluster_size`<sup>Required</sup> <a name="cache_cluster_size" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterSize"></a>

```python
cache_cluster_size: str
```

- *Type:* str

---

##### `cache_data_encrypted`<sup>Required</sup> <a name="cache_data_encrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheDataEncrypted"></a>

```python
cache_data_encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cache_ttl_in_seconds`<sup>Required</sup> <a name="cache_ttl_in_seconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheTtlInSeconds"></a>

```python
cache_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `caching_enabled`<sup>Required</sup> <a name="caching_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cachingEnabled"></a>

```python
caching_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `client_certificate_id`<sup>Required</sup> <a name="client_certificate_id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.clientCertificateId"></a>

```python
client_certificate_id: str
```

- *Type:* str

---

##### `data_trace_enabled`<sup>Required</sup> <a name="data_trace_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.dataTraceEnabled"></a>

```python
data_trace_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `documentation_version`<sup>Required</sup> <a name="documentation_version" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.documentationVersion"></a>

```python
documentation_version: str
```

- *Type:* str

---

##### `logging_level`<sup>Required</sup> <a name="logging_level" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.loggingLevel"></a>

```python
logging_level: str
```

- *Type:* str

---

##### `metrics_enabled`<sup>Required</sup> <a name="metrics_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.metricsEnabled"></a>

```python
metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `throttling_burst_limit`<sup>Required</sup> <a name="throttling_burst_limit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingBurstLimit"></a>

```python
throttling_burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttling_rate_limit`<sup>Required</sup> <a name="throttling_rate_limit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingRateLimit"></a>

```python
throttling_rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tracing_enabled`<sup>Required</sup> <a name="tracing_enabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tracingEnabled"></a>

```python
tracing_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.variables"></a>

```python
variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigatewayDeploymentStageDescription
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a>

---


### ApigatewayDeploymentStageDescriptionTagsList <a name="ApigatewayDeploymentStageDescriptionTagsList" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_deployment

apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigatewayDeploymentStageDescriptionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApigatewayDeploymentStageDescriptionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>]

---


### ApigatewayDeploymentStageDescriptionTagsOutputReference <a name="ApigatewayDeploymentStageDescriptionTagsOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_deployment

apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigatewayDeploymentStageDescriptionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>

---



