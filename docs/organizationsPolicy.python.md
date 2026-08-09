# `organizationsPolicy` Submodule <a name="`organizationsPolicy` Submodule" id="@cdktn/provider-awscc.organizationsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationsPolicy <a name="OrganizationsPolicy" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/organizations_policy awscc_organizations_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import organizations_policy

organizationsPolicy.OrganizationsPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  content: str,
  name: str,
  type: str,
  description: str = None,
  tags: IResolvable | typing.List[OrganizationsPolicyTags] = None,
  target_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.content">content</a></code> | <code>str</code> | The Policy text content. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Policy. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of policy to create. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Human readable description of the policy. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTags">OrganizationsPolicyTags</a>]</code> | A list of tags that you want to attach to the newly created policy. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.targetIds">target_ids</a></code> | <code>typing.List[str]</code> | List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.content"></a>

- *Type:* str

The Policy text content.

For AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS CloudFormation always converts a YAML policy to JSON format before submitting it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/organizations_policy#content OrganizationsPolicy#content}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.name"></a>

- *Type:* str

Name of the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/organizations_policy#name OrganizationsPolicy#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.type"></a>

- *Type:* str

The type of policy to create.

You can specify one of the following values: AISERVICES_OPT_OUT_POLICY, BACKUP_POLICY, BEDROCK_POLICY, CHATBOT_POLICY, DECLARATIVE_POLICY_EC2, INSPECTOR_POLICY, NETWORK_SECURITY_DIRECTOR_POLICY, RESOURCE_CONTROL_POLICY, S3_POLICY, SECURITYHUB_POLICY, SERVICE_CONTROL_POLICY, TAG_POLICY, UPGRADE_ROLLOUT_POLICY

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/organizations_policy#type OrganizationsPolicy#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.description"></a>

- *Type:* str

Human readable description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/organizations_policy#description OrganizationsPolicy#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTags">OrganizationsPolicyTags</a>]

A list of tags that you want to attach to the newly created policy.

For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/organizations_policy#tags OrganizationsPolicy#tags}

---

##### `target_ids`<sup>Optional</sup> <a name="target_ids" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.Initializer.parameter.targetIds"></a>

- *Type:* typing.List[str]

List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/organizations_policy#target_ids OrganizationsPolicy#target_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.resetTargetIds">reset_target_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[OrganizationsPolicyTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTags">OrganizationsPolicyTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_ids` <a name="reset_target_ids" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.resetTargetIds"></a>

```python
def reset_target_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OrganizationsPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import organizations_policy

organizationsPolicy.OrganizationsPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import organizations_policy

organizationsPolicy.OrganizationsPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import organizations_policy

organizationsPolicy.OrganizationsPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import organizations_policy

organizationsPolicy.OrganizationsPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OrganizationsPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OrganizationsPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OrganizationsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/organizations_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OrganizationsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.awsManaged">aws_managed</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList">OrganizationsPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTags">OrganizationsPolicyTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.targetIdsInput">target_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.targetIds">target_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `aws_managed`<sup>Required</sup> <a name="aws_managed" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.awsManaged"></a>

```python
aws_managed: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.tags"></a>

```python
tags: OrganizationsPolicyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList">OrganizationsPolicyTagsList</a>

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[OrganizationsPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTags">OrganizationsPolicyTags</a>]

---

##### `target_ids_input`<sup>Optional</sup> <a name="target_ids_input" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.targetIdsInput"></a>

```python
target_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `target_ids`<sup>Required</sup> <a name="target_ids" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.targetIds"></a>

```python
target_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationsPolicyConfig <a name="OrganizationsPolicyConfig" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import organizations_policy

organizationsPolicy.OrganizationsPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  content: str,
  name: str,
  type: str,
  description: str = None,
  tags: IResolvable | typing.List[OrganizationsPolicyTags] = None,
  target_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.content">content</a></code> | <code>str</code> | The Policy text content. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.name">name</a></code> | <code>str</code> | Name of the Policy. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.type">type</a></code> | <code>str</code> | The type of policy to create. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.description">description</a></code> | <code>str</code> | Human readable description of the policy. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTags">OrganizationsPolicyTags</a>]</code> | A list of tags that you want to attach to the newly created policy. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.targetIds">target_ids</a></code> | <code>typing.List[str]</code> | List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.content"></a>

```python
content: str
```

- *Type:* str

The Policy text content.

For AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS CloudFormation always converts a YAML policy to JSON format before submitting it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/organizations_policy#content OrganizationsPolicy#content}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/organizations_policy#name OrganizationsPolicy#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of policy to create.

You can specify one of the following values: AISERVICES_OPT_OUT_POLICY, BACKUP_POLICY, BEDROCK_POLICY, CHATBOT_POLICY, DECLARATIVE_POLICY_EC2, INSPECTOR_POLICY, NETWORK_SECURITY_DIRECTOR_POLICY, RESOURCE_CONTROL_POLICY, S3_POLICY, SECURITYHUB_POLICY, SERVICE_CONTROL_POLICY, TAG_POLICY, UPGRADE_ROLLOUT_POLICY

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/organizations_policy#type OrganizationsPolicy#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human readable description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/organizations_policy#description OrganizationsPolicy#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[OrganizationsPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTags">OrganizationsPolicyTags</a>]

A list of tags that you want to attach to the newly created policy.

For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/organizations_policy#tags OrganizationsPolicy#tags}

---

##### `target_ids`<sup>Optional</sup> <a name="target_ids" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyConfig.property.targetIds"></a>

```python
target_ids: typing.List[str]
```

- *Type:* typing.List[str]

List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/organizations_policy#target_ids OrganizationsPolicy#target_ids}

---

### OrganizationsPolicyTags <a name="OrganizationsPolicyTags" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTags.Initializer"></a>

```python
from cdktn_provider_awscc import organizations_policy

organizationsPolicy.OrganizationsPolicyTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTags.property.key">key</a></code> | <code>str</code> | The key identifier, or name, of the tag. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTags.property.value">value</a></code> | <code>str</code> | The string value that's associated with the key of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key identifier, or name, of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/organizations_policy#key OrganizationsPolicy#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTags.property.value"></a>

```python
value: str
```

- *Type:* str

The string value that's associated with the key of the tag.

You can set the value of a tag to an empty string, but you can't set the value of a tag to null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/organizations_policy#value OrganizationsPolicy#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationsPolicyTagsList <a name="OrganizationsPolicyTagsList" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import organizations_policy

organizationsPolicy.OrganizationsPolicyTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrganizationsPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTags">OrganizationsPolicyTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OrganizationsPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTags">OrganizationsPolicyTags</a>]

---


### OrganizationsPolicyTagsOutputReference <a name="OrganizationsPolicyTagsOutputReference" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import organizations_policy

organizationsPolicy.OrganizationsPolicyTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTags">OrganizationsPolicyTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OrganizationsPolicyTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.organizationsPolicy.OrganizationsPolicyTags">OrganizationsPolicyTags</a>

---



