# `apigatewayBasePathMappingV2` Submodule <a name="`apigatewayBasePathMappingV2` Submodule" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayBasePathMappingV2 <a name="ApigatewayBasePathMappingV2" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_base_path_mapping_v2 awscc_apigateway_base_path_mapping_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_base_path_mapping_v2

apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name_arn: str,
  rest_api_id: str,
  base_path: str = None,
  stage: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.domainNameArn">domain_name_arn</a></code> | <code>str</code> | The Arn of an AWS::ApiGateway::DomainNameV2 resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.restApiId">rest_api_id</a></code> | <code>str</code> | The ID of the API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.basePath">base_path</a></code> | <code>str</code> | The base path name that callers of the API must provide in the URL after the domain name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.stage">stage</a></code> | <code>str</code> | The name of the API's stage. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name_arn`<sup>Required</sup> <a name="domain_name_arn" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.domainNameArn"></a>

- *Type:* str

The Arn of an AWS::ApiGateway::DomainNameV2 resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_base_path_mapping_v2#domain_name_arn ApigatewayBasePathMappingV2#domain_name_arn}

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.restApiId"></a>

- *Type:* str

The ID of the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_base_path_mapping_v2#rest_api_id ApigatewayBasePathMappingV2#rest_api_id}

---

##### `base_path`<sup>Optional</sup> <a name="base_path" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.basePath"></a>

- *Type:* str

The base path name that callers of the API must provide in the URL after the domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_base_path_mapping_v2#base_path ApigatewayBasePathMappingV2#base_path}

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.stage"></a>

- *Type:* str

The name of the API's stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_base_path_mapping_v2#stage ApigatewayBasePathMappingV2#stage}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.resetBasePath">reset_base_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.resetStage">reset_stage</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_base_path` <a name="reset_base_path" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.resetBasePath"></a>

```python
def reset_base_path() -> None
```

##### `reset_stage` <a name="reset_stage" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.resetStage"></a>

```python
def reset_stage() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApigatewayBasePathMappingV2 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.isConstruct"></a>

```python
from cdktn_provider_awscc import apigateway_base_path_mapping_v2

apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apigateway_base_path_mapping_v2

apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apigateway_base_path_mapping_v2

apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apigateway_base_path_mapping_v2

apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApigatewayBasePathMappingV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigatewayBasePathMappingV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigatewayBasePathMappingV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_base_path_mapping_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayBasePathMappingV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.basePathMappingArn">base_path_mapping_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.basePathInput">base_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.domainNameArnInput">domain_name_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.restApiIdInput">rest_api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.stageInput">stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.basePath">base_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.domainNameArn">domain_name_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.restApiId">rest_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.stage">stage</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `base_path_mapping_arn`<sup>Required</sup> <a name="base_path_mapping_arn" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.basePathMappingArn"></a>

```python
base_path_mapping_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `base_path_input`<sup>Optional</sup> <a name="base_path_input" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.basePathInput"></a>

```python
base_path_input: str
```

- *Type:* str

---

##### `domain_name_arn_input`<sup>Optional</sup> <a name="domain_name_arn_input" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.domainNameArnInput"></a>

```python
domain_name_arn_input: str
```

- *Type:* str

---

##### `rest_api_id_input`<sup>Optional</sup> <a name="rest_api_id_input" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.restApiIdInput"></a>

```python
rest_api_id_input: str
```

- *Type:* str

---

##### `stage_input`<sup>Optional</sup> <a name="stage_input" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.stageInput"></a>

```python
stage_input: str
```

- *Type:* str

---

##### `base_path`<sup>Required</sup> <a name="base_path" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.basePath"></a>

```python
base_path: str
```

- *Type:* str

---

##### `domain_name_arn`<sup>Required</sup> <a name="domain_name_arn" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.domainNameArn"></a>

```python
domain_name_arn: str
```

- *Type:* str

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayBasePathMappingV2Config <a name="ApigatewayBasePathMappingV2Config" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_base_path_mapping_v2

apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name_arn: str,
  rest_api_id: str,
  base_path: str = None,
  stage: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.domainNameArn">domain_name_arn</a></code> | <code>str</code> | The Arn of an AWS::ApiGateway::DomainNameV2 resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.restApiId">rest_api_id</a></code> | <code>str</code> | The ID of the API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.basePath">base_path</a></code> | <code>str</code> | The base path name that callers of the API must provide in the URL after the domain name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.stage">stage</a></code> | <code>str</code> | The name of the API's stage. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name_arn`<sup>Required</sup> <a name="domain_name_arn" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.domainNameArn"></a>

```python
domain_name_arn: str
```

- *Type:* str

The Arn of an AWS::ApiGateway::DomainNameV2 resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_base_path_mapping_v2#domain_name_arn ApigatewayBasePathMappingV2#domain_name_arn}

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

The ID of the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_base_path_mapping_v2#rest_api_id ApigatewayBasePathMappingV2#rest_api_id}

---

##### `base_path`<sup>Optional</sup> <a name="base_path" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.basePath"></a>

```python
base_path: str
```

- *Type:* str

The base path name that callers of the API must provide in the URL after the domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_base_path_mapping_v2#base_path ApigatewayBasePathMappingV2#base_path}

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.stage"></a>

```python
stage: str
```

- *Type:* str

The name of the API's stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_base_path_mapping_v2#stage ApigatewayBasePathMappingV2#stage}

---



