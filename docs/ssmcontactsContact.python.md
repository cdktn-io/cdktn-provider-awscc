# `ssmcontactsContact` Submodule <a name="`ssmcontactsContact` Submodule" id="@cdktn/provider-awscc.ssmcontactsContact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmcontactsContact <a name="SsmcontactsContact" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact awscc_ssmcontacts_contact}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContact(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  alias: str,
  display_name: str,
  type: str,
  plan: IResolvable | typing.List[SsmcontactsContactPlan] = None,
  tags: IResolvable | typing.List[SsmcontactsContactTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias of the contact. String value with 20 to 256 characters. Only alphabetical, numeric characters, dash, or underscore allowed. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Name of the contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.type">type</a></code> | <code>str</code> | Contact type, which specify type of contact. Currently supported values: ?PERSONAL?, ?SHARED?, ?OTHER?. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.plan">plan</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan">SsmcontactsContactPlan</a>]</code> | The stages that an escalation plan or engagement plan engages contacts and contact methods in. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags">SsmcontactsContactTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#tags SsmcontactsContact#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.alias"></a>

- *Type:* str

Alias of the contact. String value with 20 to 256 characters. Only alphabetical, numeric characters, dash, or underscore allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#alias SsmcontactsContact#alias}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.displayName"></a>

- *Type:* str

Name of the contact.

String value with 3 to 256 characters. Only alphabetical, space, numeric characters, dash, or underscore allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#display_name SsmcontactsContact#display_name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.type"></a>

- *Type:* str

Contact type, which specify type of contact. Currently supported values: ?PERSONAL?, ?SHARED?, ?OTHER?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#type SsmcontactsContact#type}

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.plan"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan">SsmcontactsContactPlan</a>]

The stages that an escalation plan or engagement plan engages contacts and contact methods in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#plan SsmcontactsContact#plan}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags">SsmcontactsContactTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#tags SsmcontactsContact#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.putPlan">put_plan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.resetPlan">reset_plan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_plan` <a name="put_plan" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.putPlan"></a>

```python
def put_plan(
  value: IResolvable | typing.List[SsmcontactsContactPlan]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.putPlan.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan">SsmcontactsContactPlan</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SsmcontactsContactTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags">SsmcontactsContactTags</a>]

---

##### `reset_plan` <a name="reset_plan" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.resetPlan"></a>

```python
def reset_plan() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SsmcontactsContact resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isConstruct"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContact.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContact.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContact.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContact.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SsmcontactsContact resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SsmcontactsContact to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SsmcontactsContact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmcontactsContact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.plan">plan</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList">SsmcontactsContactPlanList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList">SsmcontactsContactTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.planInput">plan_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan">SsmcontactsContactPlan</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags">SsmcontactsContactTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.plan"></a>

```python
plan: SsmcontactsContactPlanList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList">SsmcontactsContactPlanList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.tags"></a>

```python
tags: SsmcontactsContactTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList">SsmcontactsContactTagsList</a>

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.planInput"></a>

```python
plan_input: IResolvable | typing.List[SsmcontactsContactPlan]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan">SsmcontactsContactPlan</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SsmcontactsContactTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags">SsmcontactsContactTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsmcontactsContactConfig <a name="SsmcontactsContactConfig" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContactConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  alias: str,
  display_name: str,
  type: str,
  plan: IResolvable | typing.List[SsmcontactsContactPlan] = None,
  tags: IResolvable | typing.List[SsmcontactsContactTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.alias">alias</a></code> | <code>str</code> | Alias of the contact. String value with 20 to 256 characters. Only alphabetical, numeric characters, dash, or underscore allowed. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.displayName">display_name</a></code> | <code>str</code> | Name of the contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.type">type</a></code> | <code>str</code> | Contact type, which specify type of contact. Currently supported values: ?PERSONAL?, ?SHARED?, ?OTHER?. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.plan">plan</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan">SsmcontactsContactPlan</a>]</code> | The stages that an escalation plan or engagement plan engages contacts and contact methods in. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags">SsmcontactsContactTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#tags SsmcontactsContact#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias of the contact. String value with 20 to 256 characters. Only alphabetical, numeric characters, dash, or underscore allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#alias SsmcontactsContact#alias}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Name of the contact.

String value with 3 to 256 characters. Only alphabetical, space, numeric characters, dash, or underscore allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#display_name SsmcontactsContact#display_name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Contact type, which specify type of contact. Currently supported values: ?PERSONAL?, ?SHARED?, ?OTHER?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#type SsmcontactsContact#type}

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.plan"></a>

```python
plan: IResolvable | typing.List[SsmcontactsContactPlan]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan">SsmcontactsContactPlan</a>]

The stages that an escalation plan or engagement plan engages contacts and contact methods in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#plan SsmcontactsContact#plan}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SsmcontactsContactTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags">SsmcontactsContactTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#tags SsmcontactsContact#tags}.

---

### SsmcontactsContactPlan <a name="SsmcontactsContactPlan" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContactPlan(
  duration_in_minutes: typing.Union[int, float] = None,
  rotation_ids: typing.List[str] = None,
  targets: IResolvable | typing.List[SsmcontactsContactPlanTargets] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | The time to wait until beginning the next stage. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.property.rotationIds">rotation_ids</a></code> | <code>typing.List[str]</code> | List of Rotation Ids to associate with Contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.property.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets">SsmcontactsContactPlanTargets</a>]</code> | The contacts or contact methods that the escalation plan or engagement plan is engaging. |

---

##### `duration_in_minutes`<sup>Optional</sup> <a name="duration_in_minutes" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time to wait until beginning the next stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#duration_in_minutes SsmcontactsContact#duration_in_minutes}

---

##### `rotation_ids`<sup>Optional</sup> <a name="rotation_ids" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.property.rotationIds"></a>

```python
rotation_ids: typing.List[str]
```

- *Type:* typing.List[str]

List of Rotation Ids to associate with Contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#rotation_ids SsmcontactsContact#rotation_ids}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.property.targets"></a>

```python
targets: IResolvable | typing.List[SsmcontactsContactPlanTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets">SsmcontactsContactPlanTargets</a>]

The contacts or contact methods that the escalation plan or engagement plan is engaging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#targets SsmcontactsContact#targets}

---

### SsmcontactsContactPlanTargets <a name="SsmcontactsContactPlanTargets" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContactPlanTargets(
  channel_target_info: SsmcontactsContactPlanTargetsChannelTargetInfo = None,
  contact_target_info: SsmcontactsContactPlanTargetsContactTargetInfo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets.property.channelTargetInfo">channel_target_info</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo">SsmcontactsContactPlanTargetsChannelTargetInfo</a></code> | Information about the contact channel that SSM Incident Manager uses to engage the contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets.property.contactTargetInfo">contact_target_info</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo">SsmcontactsContactPlanTargetsContactTargetInfo</a></code> | The contact that SSM Incident Manager is engaging during an incident. |

---

##### `channel_target_info`<sup>Optional</sup> <a name="channel_target_info" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets.property.channelTargetInfo"></a>

```python
channel_target_info: SsmcontactsContactPlanTargetsChannelTargetInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo">SsmcontactsContactPlanTargetsChannelTargetInfo</a>

Information about the contact channel that SSM Incident Manager uses to engage the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#channel_target_info SsmcontactsContact#channel_target_info}

---

##### `contact_target_info`<sup>Optional</sup> <a name="contact_target_info" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets.property.contactTargetInfo"></a>

```python
contact_target_info: SsmcontactsContactPlanTargetsContactTargetInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo">SsmcontactsContactPlanTargetsContactTargetInfo</a>

The contact that SSM Incident Manager is engaging during an incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#contact_target_info SsmcontactsContact#contact_target_info}

---

### SsmcontactsContactPlanTargetsChannelTargetInfo <a name="SsmcontactsContactPlanTargetsChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo(
  channel_id: str = None,
  retry_interval_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo.property.channelId">channel_id</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the contact channel. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo.property.retryIntervalInMinutes">retry_interval_in_minutes</a></code> | <code>typing.Union[int, float]</code> | The number of minutes to wait to retry sending engagement in the case the engagement initially fails. |

---

##### `channel_id`<sup>Optional</sup> <a name="channel_id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the contact channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#channel_id SsmcontactsContact#channel_id}

---

##### `retry_interval_in_minutes`<sup>Optional</sup> <a name="retry_interval_in_minutes" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo.property.retryIntervalInMinutes"></a>

```python
retry_interval_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of minutes to wait to retry sending engagement in the case the engagement initially fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#retry_interval_in_minutes SsmcontactsContact#retry_interval_in_minutes}

---

### SsmcontactsContactPlanTargetsContactTargetInfo <a name="SsmcontactsContactPlanTargetsContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo(
  contact_id: str = None,
  is_essential: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo.property.contactId">contact_id</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo.property.isEssential">is_essential</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan. |

---

##### `contact_id`<sup>Optional</sup> <a name="contact_id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo.property.contactId"></a>

```python
contact_id: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#contact_id SsmcontactsContact#contact_id}

---

##### `is_essential`<sup>Optional</sup> <a name="is_essential" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo.property.isEssential"></a>

```python
is_essential: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#is_essential SsmcontactsContact#is_essential}

---

### SsmcontactsContactTags <a name="SsmcontactsContactTags" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContactTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#key SsmcontactsContact#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#value SsmcontactsContact#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SsmcontactsContactPlanList <a name="SsmcontactsContactPlanList" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContactPlanList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmcontactsContactPlanOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan">SsmcontactsContactPlan</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmcontactsContactPlan]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan">SsmcontactsContactPlan</a>]

---


### SsmcontactsContactPlanOutputReference <a name="SsmcontactsContactPlanOutputReference" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContactPlanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.putTargets">put_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resetDurationInMinutes">reset_duration_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resetRotationIds">reset_rotation_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resetTargets">reset_targets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_targets` <a name="put_targets" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.putTargets"></a>

```python
def put_targets(
  value: IResolvable | typing.List[SsmcontactsContactPlanTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.putTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets">SsmcontactsContactPlanTargets</a>]

---

##### `reset_duration_in_minutes` <a name="reset_duration_in_minutes" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resetDurationInMinutes"></a>

```python
def reset_duration_in_minutes() -> None
```

##### `reset_rotation_ids` <a name="reset_rotation_ids" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resetRotationIds"></a>

```python
def reset_rotation_ids() -> None
```

##### `reset_targets` <a name="reset_targets" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resetTargets"></a>

```python
def reset_targets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList">SsmcontactsContactPlanTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.durationInMinutesInput">duration_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.rotationIdsInput">rotation_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.targetsInput">targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets">SsmcontactsContactPlanTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.rotationIds">rotation_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan">SsmcontactsContactPlan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.targets"></a>

```python
targets: SsmcontactsContactPlanTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList">SsmcontactsContactPlanTargetsList</a>

---

##### `duration_in_minutes_input`<sup>Optional</sup> <a name="duration_in_minutes_input" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.durationInMinutesInput"></a>

```python
duration_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_ids_input`<sup>Optional</sup> <a name="rotation_ids_input" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.rotationIdsInput"></a>

```python
rotation_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.targetsInput"></a>

```python
targets_input: IResolvable | typing.List[SsmcontactsContactPlanTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets">SsmcontactsContactPlanTargets</a>]

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_ids`<sup>Required</sup> <a name="rotation_ids" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.rotationIds"></a>

```python
rotation_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmcontactsContactPlan
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan">SsmcontactsContactPlan</a>

---


### SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference <a name="SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resetChannelId">reset_channel_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resetRetryIntervalInMinutes">reset_retry_interval_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel_id` <a name="reset_channel_id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resetChannelId"></a>

```python
def reset_channel_id() -> None
```

##### `reset_retry_interval_in_minutes` <a name="reset_retry_interval_in_minutes" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resetRetryIntervalInMinutes"></a>

```python
def reset_retry_interval_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.channelIdInput">channel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutesInput">retry_interval_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.channelId">channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutes">retry_interval_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo">SsmcontactsContactPlanTargetsChannelTargetInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_id_input`<sup>Optional</sup> <a name="channel_id_input" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.channelIdInput"></a>

```python
channel_id_input: str
```

- *Type:* str

---

##### `retry_interval_in_minutes_input`<sup>Optional</sup> <a name="retry_interval_in_minutes_input" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutesInput"></a>

```python
retry_interval_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

---

##### `retry_interval_in_minutes`<sup>Required</sup> <a name="retry_interval_in_minutes" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutes"></a>

```python
retry_interval_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmcontactsContactPlanTargetsChannelTargetInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo">SsmcontactsContactPlanTargetsChannelTargetInfo</a>

---


### SsmcontactsContactPlanTargetsContactTargetInfoOutputReference <a name="SsmcontactsContactPlanTargetsContactTargetInfoOutputReference" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resetContactId">reset_contact_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resetIsEssential">reset_is_essential</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_contact_id` <a name="reset_contact_id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resetContactId"></a>

```python
def reset_contact_id() -> None
```

##### `reset_is_essential` <a name="reset_is_essential" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resetIsEssential"></a>

```python
def reset_is_essential() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.contactIdInput">contact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.isEssentialInput">is_essential_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.contactId">contact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.isEssential">is_essential</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo">SsmcontactsContactPlanTargetsContactTargetInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contact_id_input`<sup>Optional</sup> <a name="contact_id_input" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.contactIdInput"></a>

```python
contact_id_input: str
```

- *Type:* str

---

##### `is_essential_input`<sup>Optional</sup> <a name="is_essential_input" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.isEssentialInput"></a>

```python
is_essential_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `contact_id`<sup>Required</sup> <a name="contact_id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.contactId"></a>

```python
contact_id: str
```

- *Type:* str

---

##### `is_essential`<sup>Required</sup> <a name="is_essential" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.isEssential"></a>

```python
is_essential: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmcontactsContactPlanTargetsContactTargetInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo">SsmcontactsContactPlanTargetsContactTargetInfo</a>

---


### SsmcontactsContactPlanTargetsList <a name="SsmcontactsContactPlanTargetsList" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContactPlanTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmcontactsContactPlanTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets">SsmcontactsContactPlanTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmcontactsContactPlanTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets">SsmcontactsContactPlanTargets</a>]

---


### SsmcontactsContactPlanTargetsOutputReference <a name="SsmcontactsContactPlanTargetsOutputReference" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.putChannelTargetInfo">put_channel_target_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.putContactTargetInfo">put_contact_target_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resetChannelTargetInfo">reset_channel_target_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resetContactTargetInfo">reset_contact_target_info</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_channel_target_info` <a name="put_channel_target_info" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.putChannelTargetInfo"></a>

```python
def put_channel_target_info(
  channel_id: str = None,
  retry_interval_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `channel_id`<sup>Optional</sup> <a name="channel_id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.putChannelTargetInfo.parameter.channelId"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the contact channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#channel_id SsmcontactsContact#channel_id}

---

###### `retry_interval_in_minutes`<sup>Optional</sup> <a name="retry_interval_in_minutes" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.putChannelTargetInfo.parameter.retryIntervalInMinutes"></a>

- *Type:* typing.Union[int, float]

The number of minutes to wait to retry sending engagement in the case the engagement initially fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#retry_interval_in_minutes SsmcontactsContact#retry_interval_in_minutes}

---

##### `put_contact_target_info` <a name="put_contact_target_info" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.putContactTargetInfo"></a>

```python
def put_contact_target_info(
  contact_id: str = None,
  is_essential: bool | IResolvable = None
) -> None
```

###### `contact_id`<sup>Optional</sup> <a name="contact_id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.putContactTargetInfo.parameter.contactId"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#contact_id SsmcontactsContact#contact_id}

---

###### `is_essential`<sup>Optional</sup> <a name="is_essential" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.putContactTargetInfo.parameter.isEssential"></a>

- *Type:* bool | cdktn.IResolvable

A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_contact#is_essential SsmcontactsContact#is_essential}

---

##### `reset_channel_target_info` <a name="reset_channel_target_info" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resetChannelTargetInfo"></a>

```python
def reset_channel_target_info() -> None
```

##### `reset_contact_target_info` <a name="reset_contact_target_info" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resetContactTargetInfo"></a>

```python
def reset_contact_target_info() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.channelTargetInfo">channel_target_info</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference">SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.contactTargetInfo">contact_target_info</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference">SsmcontactsContactPlanTargetsContactTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.channelTargetInfoInput">channel_target_info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo">SsmcontactsContactPlanTargetsChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.contactTargetInfoInput">contact_target_info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo">SsmcontactsContactPlanTargetsContactTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets">SsmcontactsContactPlanTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_target_info`<sup>Required</sup> <a name="channel_target_info" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.channelTargetInfo"></a>

```python
channel_target_info: SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference">SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference</a>

---

##### `contact_target_info`<sup>Required</sup> <a name="contact_target_info" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.contactTargetInfo"></a>

```python
contact_target_info: SsmcontactsContactPlanTargetsContactTargetInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference">SsmcontactsContactPlanTargetsContactTargetInfoOutputReference</a>

---

##### `channel_target_info_input`<sup>Optional</sup> <a name="channel_target_info_input" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.channelTargetInfoInput"></a>

```python
channel_target_info_input: IResolvable | SsmcontactsContactPlanTargetsChannelTargetInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo">SsmcontactsContactPlanTargetsChannelTargetInfo</a>

---

##### `contact_target_info_input`<sup>Optional</sup> <a name="contact_target_info_input" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.contactTargetInfoInput"></a>

```python
contact_target_info_input: IResolvable | SsmcontactsContactPlanTargetsContactTargetInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo">SsmcontactsContactPlanTargetsContactTargetInfo</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmcontactsContactPlanTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets">SsmcontactsContactPlanTargets</a>

---


### SsmcontactsContactTagsList <a name="SsmcontactsContactTagsList" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContactTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmcontactsContactTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags">SsmcontactsContactTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmcontactsContactTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags">SsmcontactsContactTags</a>]

---


### SsmcontactsContactTagsOutputReference <a name="SsmcontactsContactTagsOutputReference" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact

ssmcontactsContact.SsmcontactsContactTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags">SsmcontactsContactTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmcontactsContactTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags">SsmcontactsContactTags</a>

---



