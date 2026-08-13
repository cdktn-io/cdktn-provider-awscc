# `wafv2RegexPatternSet` Submodule <a name="`wafv2RegexPatternSet` Submodule" id="@cdktn/provider-awscc.wafv2RegexPatternSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Wafv2RegexPatternSet <a name="Wafv2RegexPatternSet" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_regex_pattern_set awscc_wafv2_regex_pattern_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_regex_pattern_set

wafv2RegexPatternSet.Wafv2RegexPatternSet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  regular_expression_list: typing.List[str],
  scope: str,
  description: str = None,
  name: str = None,
  tags: IResolvable | typing.List[Wafv2RegexPatternSetTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.regularExpressionList">regular_expression_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_regex_pattern_set#regular_expression_list Wafv2RegexPatternSet#regular_expression_list}. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Use CLOUDFRONT for CloudFront RegexPatternSet, use REGIONAL for Application Load Balancer and API Gateway. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the entity. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the RegexPatternSet. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTags">Wafv2RegexPatternSetTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_regex_pattern_set#tags Wafv2RegexPatternSet#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `regular_expression_list`<sup>Required</sup> <a name="regular_expression_list" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.regularExpressionList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_regex_pattern_set#regular_expression_list Wafv2RegexPatternSet#regular_expression_list}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.scope"></a>

- *Type:* str

Use CLOUDFRONT for CloudFront RegexPatternSet, use REGIONAL for Application Load Balancer and API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_regex_pattern_set#scope Wafv2RegexPatternSet#scope}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.description"></a>

- *Type:* str

Description of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_regex_pattern_set#description Wafv2RegexPatternSet#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.name"></a>

- *Type:* str

Name of the RegexPatternSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_regex_pattern_set#name Wafv2RegexPatternSet#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTags">Wafv2RegexPatternSetTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_regex_pattern_set#tags Wafv2RegexPatternSet#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Wafv2RegexPatternSetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTags">Wafv2RegexPatternSetTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Wafv2RegexPatternSet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.isConstruct"></a>

```python
from cdktn_provider_awscc import wafv2_regex_pattern_set

wafv2RegexPatternSet.Wafv2RegexPatternSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import wafv2_regex_pattern_set

wafv2RegexPatternSet.Wafv2RegexPatternSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformResource"></a>

```python
from cdktn_provider_awscc import wafv2_regex_pattern_set

wafv2RegexPatternSet.Wafv2RegexPatternSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import wafv2_regex_pattern_set

wafv2RegexPatternSet.Wafv2RegexPatternSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Wafv2RegexPatternSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Wafv2RegexPatternSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Wafv2RegexPatternSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_regex_pattern_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Wafv2RegexPatternSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.regexPatternSetId">regex_pattern_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList">Wafv2RegexPatternSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.regularExpressionListInput">regular_expression_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTags">Wafv2RegexPatternSetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.regularExpressionList">regular_expression_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `regex_pattern_set_id`<sup>Required</sup> <a name="regex_pattern_set_id" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.regexPatternSetId"></a>

```python
regex_pattern_set_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tags"></a>

```python
tags: Wafv2RegexPatternSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList">Wafv2RegexPatternSetTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regular_expression_list_input`<sup>Optional</sup> <a name="regular_expression_list_input" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.regularExpressionListInput"></a>

```python
regular_expression_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Wafv2RegexPatternSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTags">Wafv2RegexPatternSetTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regular_expression_list`<sup>Required</sup> <a name="regular_expression_list" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.regularExpressionList"></a>

```python
regular_expression_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Wafv2RegexPatternSetConfig <a name="Wafv2RegexPatternSetConfig" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_regex_pattern_set

wafv2RegexPatternSet.Wafv2RegexPatternSetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  regular_expression_list: typing.List[str],
  scope: str,
  description: str = None,
  name: str = None,
  tags: IResolvable | typing.List[Wafv2RegexPatternSetTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.regularExpressionList">regular_expression_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_regex_pattern_set#regular_expression_list Wafv2RegexPatternSet#regular_expression_list}. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.scope">scope</a></code> | <code>str</code> | Use CLOUDFRONT for CloudFront RegexPatternSet, use REGIONAL for Application Load Balancer and API Gateway. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.description">description</a></code> | <code>str</code> | Description of the entity. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.name">name</a></code> | <code>str</code> | Name of the RegexPatternSet. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTags">Wafv2RegexPatternSetTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_regex_pattern_set#tags Wafv2RegexPatternSet#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `regular_expression_list`<sup>Required</sup> <a name="regular_expression_list" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.regularExpressionList"></a>

```python
regular_expression_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_regex_pattern_set#regular_expression_list Wafv2RegexPatternSet#regular_expression_list}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Use CLOUDFRONT for CloudFront RegexPatternSet, use REGIONAL for Application Load Balancer and API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_regex_pattern_set#scope Wafv2RegexPatternSet#scope}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_regex_pattern_set#description Wafv2RegexPatternSet#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the RegexPatternSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_regex_pattern_set#name Wafv2RegexPatternSet#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Wafv2RegexPatternSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTags">Wafv2RegexPatternSetTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_regex_pattern_set#tags Wafv2RegexPatternSet#tags}.

---

### Wafv2RegexPatternSetTags <a name="Wafv2RegexPatternSetTags" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTags.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_regex_pattern_set

wafv2RegexPatternSet.Wafv2RegexPatternSetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_regex_pattern_set#key Wafv2RegexPatternSet#key}. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_regex_pattern_set#value Wafv2RegexPatternSet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_regex_pattern_set#key Wafv2RegexPatternSet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wafv2_regex_pattern_set#value Wafv2RegexPatternSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Wafv2RegexPatternSetTagsList <a name="Wafv2RegexPatternSetTagsList" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_regex_pattern_set

wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2RegexPatternSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTags">Wafv2RegexPatternSetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Wafv2RegexPatternSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTags">Wafv2RegexPatternSetTags</a>]

---


### Wafv2RegexPatternSetTagsOutputReference <a name="Wafv2RegexPatternSetTagsOutputReference" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wafv2_regex_pattern_set

wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTags">Wafv2RegexPatternSetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Wafv2RegexPatternSetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2RegexPatternSet.Wafv2RegexPatternSetTags">Wafv2RegexPatternSetTags</a>

---



