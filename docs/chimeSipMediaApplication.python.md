# `chimeSipMediaApplication` Submodule <a name="`chimeSipMediaApplication` Submodule" id="@cdktn/provider-awscc.chimeSipMediaApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeSipMediaApplication <a name="ChimeSipMediaApplication" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_sip_media_application awscc_chime_sip_media_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer"></a>

```python
from cdktn_provider_awscc import chime_sip_media_application

chimeSipMediaApplication.ChimeSipMediaApplication(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aws_region: str,
  endpoints: IResolvable | typing.List[ChimeSipMediaApplicationEndpoints],
  name: str,
  tags: IResolvable | typing.List[ChimeSipMediaApplicationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.awsRegion">aws_region</a></code> | <code>str</code> | The AWS Region in which the SIP media application is created. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.endpoints">endpoints</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints">ChimeSipMediaApplicationEndpoints</a>]</code> | List of endpoints (Lambda ARNs) specified for the SIP media application. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the SIP media application. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags">ChimeSipMediaApplicationTags</a>]</code> | Tags assigned to the SIP media application. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.awsRegion"></a>

- *Type:* str

The AWS Region in which the SIP media application is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_sip_media_application#aws_region ChimeSipMediaApplication#aws_region}

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.endpoints"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints">ChimeSipMediaApplicationEndpoints</a>]

List of endpoints (Lambda ARNs) specified for the SIP media application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_sip_media_application#endpoints ChimeSipMediaApplication#endpoints}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.name"></a>

- *Type:* str

The name of the SIP media application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_sip_media_application#name ChimeSipMediaApplication#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags">ChimeSipMediaApplicationTags</a>]

Tags assigned to the SIP media application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_sip_media_application#tags ChimeSipMediaApplication#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.putEndpoints">put_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_endpoints` <a name="put_endpoints" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.putEndpoints"></a>

```python
def put_endpoints(
  value: IResolvable | typing.List[ChimeSipMediaApplicationEndpoints]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.putEndpoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints">ChimeSipMediaApplicationEndpoints</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ChimeSipMediaApplicationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags">ChimeSipMediaApplicationTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ChimeSipMediaApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.isConstruct"></a>

```python
from cdktn_provider_awscc import chime_sip_media_application

chimeSipMediaApplication.ChimeSipMediaApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.isTerraformElement"></a>

```python
from cdktn_provider_awscc import chime_sip_media_application

chimeSipMediaApplication.ChimeSipMediaApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.isTerraformResource"></a>

```python
from cdktn_provider_awscc import chime_sip_media_application

chimeSipMediaApplication.ChimeSipMediaApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import chime_sip_media_application

chimeSipMediaApplication.ChimeSipMediaApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ChimeSipMediaApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChimeSipMediaApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChimeSipMediaApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_sip_media_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChimeSipMediaApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList">ChimeSipMediaApplicationEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.sipMediaApplicationArn">sip_media_application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.sipMediaApplicationId">sip_media_application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList">ChimeSipMediaApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.updatedTimestamp">updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.awsRegionInput">aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.endpointsInput">endpoints_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints">ChimeSipMediaApplicationEndpoints</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags">ChimeSipMediaApplicationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.endpoints"></a>

```python
endpoints: ChimeSipMediaApplicationEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList">ChimeSipMediaApplicationEndpointsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `sip_media_application_arn`<sup>Required</sup> <a name="sip_media_application_arn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.sipMediaApplicationArn"></a>

```python
sip_media_application_arn: str
```

- *Type:* str

---

##### `sip_media_application_id`<sup>Required</sup> <a name="sip_media_application_id" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.sipMediaApplicationId"></a>

```python
sip_media_application_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.tags"></a>

```python
tags: ChimeSipMediaApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList">ChimeSipMediaApplicationTagsList</a>

---

##### `updated_timestamp`<sup>Required</sup> <a name="updated_timestamp" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.updatedTimestamp"></a>

```python
updated_timestamp: str
```

- *Type:* str

---

##### `aws_region_input`<sup>Optional</sup> <a name="aws_region_input" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.awsRegionInput"></a>

```python
aws_region_input: str
```

- *Type:* str

---

##### `endpoints_input`<sup>Optional</sup> <a name="endpoints_input" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.endpointsInput"></a>

```python
endpoints_input: IResolvable | typing.List[ChimeSipMediaApplicationEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints">ChimeSipMediaApplicationEndpoints</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ChimeSipMediaApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags">ChimeSipMediaApplicationTags</a>]

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeSipMediaApplicationConfig <a name="ChimeSipMediaApplicationConfig" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import chime_sip_media_application

chimeSipMediaApplication.ChimeSipMediaApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aws_region: str,
  endpoints: IResolvable | typing.List[ChimeSipMediaApplicationEndpoints],
  name: str,
  tags: IResolvable | typing.List[ChimeSipMediaApplicationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.awsRegion">aws_region</a></code> | <code>str</code> | The AWS Region in which the SIP media application is created. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.endpoints">endpoints</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints">ChimeSipMediaApplicationEndpoints</a>]</code> | List of endpoints (Lambda ARNs) specified for the SIP media application. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.name">name</a></code> | <code>str</code> | The name of the SIP media application. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags">ChimeSipMediaApplicationTags</a>]</code> | Tags assigned to the SIP media application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

The AWS Region in which the SIP media application is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_sip_media_application#aws_region ChimeSipMediaApplication#aws_region}

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.endpoints"></a>

```python
endpoints: IResolvable | typing.List[ChimeSipMediaApplicationEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints">ChimeSipMediaApplicationEndpoints</a>]

List of endpoints (Lambda ARNs) specified for the SIP media application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_sip_media_application#endpoints ChimeSipMediaApplication#endpoints}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the SIP media application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_sip_media_application#name ChimeSipMediaApplication#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ChimeSipMediaApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags">ChimeSipMediaApplicationTags</a>]

Tags assigned to the SIP media application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_sip_media_application#tags ChimeSipMediaApplication#tags}

---

### ChimeSipMediaApplicationEndpoints <a name="ChimeSipMediaApplicationEndpoints" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints.Initializer"></a>

```python
from cdktn_provider_awscc import chime_sip_media_application

chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints(
  lambda_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | Valid Amazon Resource Name (ARN) of the Lambda function. |

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

Valid Amazon Resource Name (ARN) of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_sip_media_application#lambda_arn ChimeSipMediaApplication#lambda_arn}

---

### ChimeSipMediaApplicationTags <a name="ChimeSipMediaApplicationTags" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags.Initializer"></a>

```python
from cdktn_provider_awscc import chime_sip_media_application

chimeSipMediaApplication.ChimeSipMediaApplicationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_sip_media_application#key ChimeSipMediaApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_sip_media_application#value ChimeSipMediaApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeSipMediaApplicationEndpointsList <a name="ChimeSipMediaApplicationEndpointsList" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.Initializer"></a>

```python
from cdktn_provider_awscc import chime_sip_media_application

chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChimeSipMediaApplicationEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints">ChimeSipMediaApplicationEndpoints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ChimeSipMediaApplicationEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints">ChimeSipMediaApplicationEndpoints</a>]

---


### ChimeSipMediaApplicationEndpointsOutputReference <a name="ChimeSipMediaApplicationEndpointsOutputReference" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_sip_media_application

chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.property.lambdaArnInput">lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints">ChimeSipMediaApplicationEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_arn_input`<sup>Optional</sup> <a name="lambda_arn_input" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.property.lambdaArnInput"></a>

```python
lambda_arn_input: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeSipMediaApplicationEndpoints
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints">ChimeSipMediaApplicationEndpoints</a>

---


### ChimeSipMediaApplicationTagsList <a name="ChimeSipMediaApplicationTagsList" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import chime_sip_media_application

chimeSipMediaApplication.ChimeSipMediaApplicationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChimeSipMediaApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags">ChimeSipMediaApplicationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ChimeSipMediaApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags">ChimeSipMediaApplicationTags</a>]

---


### ChimeSipMediaApplicationTagsOutputReference <a name="ChimeSipMediaApplicationTagsOutputReference" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_sip_media_application

chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags">ChimeSipMediaApplicationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeSipMediaApplicationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags">ChimeSipMediaApplicationTags</a>

---



