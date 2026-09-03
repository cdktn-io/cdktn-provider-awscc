# `securityagentTargetDomain` Submodule <a name="`securityagentTargetDomain` Submodule" id="@cdktn/provider-awscc.securityagentTargetDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityagentTargetDomain <a name="SecurityagentTargetDomain" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_target_domain awscc_securityagent_target_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_target_domain

securityagentTargetDomain.SecurityagentTargetDomain(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  target_domain_name: str,
  verification_method: str,
  tags: IResolvable | typing.List[SecurityagentTargetDomainTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.targetDomainName">target_domain_name</a></code> | <code>str</code> | Domain name of the target domain. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.verificationMethod">verification_method</a></code> | <code>str</code> | Verification method for the target domain. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a>]</code> | Tags for the target domain. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `target_domain_name`<sup>Required</sup> <a name="target_domain_name" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.targetDomainName"></a>

- *Type:* str

Domain name of the target domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_target_domain#target_domain_name SecurityagentTargetDomain#target_domain_name}

---

##### `verification_method`<sup>Required</sup> <a name="verification_method" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.verificationMethod"></a>

- *Type:* str

Verification method for the target domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_target_domain#verification_method SecurityagentTargetDomain#verification_method}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a>]

Tags for the target domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_target_domain#tags SecurityagentTargetDomain#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SecurityagentTargetDomainTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecurityagentTargetDomain resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isConstruct"></a>

```python
from cdktn_provider_awscc import securityagent_target_domain

securityagentTargetDomain.SecurityagentTargetDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isTerraformElement"></a>

```python
from cdktn_provider_awscc import securityagent_target_domain

securityagentTargetDomain.SecurityagentTargetDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isTerraformResource"></a>

```python
from cdktn_provider_awscc import securityagent_target_domain

securityagentTargetDomain.SecurityagentTargetDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import securityagent_target_domain

securityagentTargetDomain.SecurityagentTargetDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecurityagentTargetDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityagentTargetDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityagentTargetDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_target_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityagentTargetDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList">SecurityagentTargetDomainTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.targetDomainId">target_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationDetails">verification_details</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference">SecurityagentTargetDomainVerificationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationStatus">verification_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationStatusReason">verification_status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verifiedAt">verified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.targetDomainNameInput">target_domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationMethodInput">verification_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.targetDomainName">target_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationMethod">verification_method</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.tags"></a>

```python
tags: SecurityagentTargetDomainTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList">SecurityagentTargetDomainTagsList</a>

---

##### `target_domain_id`<sup>Required</sup> <a name="target_domain_id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.targetDomainId"></a>

```python
target_domain_id: str
```

- *Type:* str

---

##### `verification_details`<sup>Required</sup> <a name="verification_details" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationDetails"></a>

```python
verification_details: SecurityagentTargetDomainVerificationDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference">SecurityagentTargetDomainVerificationDetailsOutputReference</a>

---

##### `verification_status`<sup>Required</sup> <a name="verification_status" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationStatus"></a>

```python
verification_status: str
```

- *Type:* str

---

##### `verification_status_reason`<sup>Required</sup> <a name="verification_status_reason" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationStatusReason"></a>

```python
verification_status_reason: str
```

- *Type:* str

---

##### `verified_at`<sup>Required</sup> <a name="verified_at" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verifiedAt"></a>

```python
verified_at: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SecurityagentTargetDomainTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a>]

---

##### `target_domain_name_input`<sup>Optional</sup> <a name="target_domain_name_input" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.targetDomainNameInput"></a>

```python
target_domain_name_input: str
```

- *Type:* str

---

##### `verification_method_input`<sup>Optional</sup> <a name="verification_method_input" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationMethodInput"></a>

```python
verification_method_input: str
```

- *Type:* str

---

##### `target_domain_name`<sup>Required</sup> <a name="target_domain_name" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.targetDomainName"></a>

```python
target_domain_name: str
```

- *Type:* str

---

##### `verification_method`<sup>Required</sup> <a name="verification_method" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationMethod"></a>

```python
verification_method: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityagentTargetDomainConfig <a name="SecurityagentTargetDomainConfig" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_target_domain

securityagentTargetDomain.SecurityagentTargetDomainConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  target_domain_name: str,
  verification_method: str,
  tags: IResolvable | typing.List[SecurityagentTargetDomainTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.targetDomainName">target_domain_name</a></code> | <code>str</code> | Domain name of the target domain. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.verificationMethod">verification_method</a></code> | <code>str</code> | Verification method for the target domain. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a>]</code> | Tags for the target domain. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `target_domain_name`<sup>Required</sup> <a name="target_domain_name" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.targetDomainName"></a>

```python
target_domain_name: str
```

- *Type:* str

Domain name of the target domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_target_domain#target_domain_name SecurityagentTargetDomain#target_domain_name}

---

##### `verification_method`<sup>Required</sup> <a name="verification_method" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.verificationMethod"></a>

```python
verification_method: str
```

- *Type:* str

Verification method for the target domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_target_domain#verification_method SecurityagentTargetDomain#verification_method}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SecurityagentTargetDomainTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a>]

Tags for the target domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_target_domain#tags SecurityagentTargetDomain#tags}

---

### SecurityagentTargetDomainTags <a name="SecurityagentTargetDomainTags" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_target_domain

securityagentTargetDomain.SecurityagentTargetDomainTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_target_domain#key SecurityagentTargetDomain#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/securityagent_target_domain#value SecurityagentTargetDomain#value}

---

### SecurityagentTargetDomainVerificationDetails <a name="SecurityagentTargetDomainVerificationDetails" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetails.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_target_domain

securityagentTargetDomain.SecurityagentTargetDomainVerificationDetails()
```


### SecurityagentTargetDomainVerificationDetailsDnsTxt <a name="SecurityagentTargetDomainVerificationDetailsDnsTxt" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxt.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_target_domain

securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxt()
```


### SecurityagentTargetDomainVerificationDetailsHttpRoute <a name="SecurityagentTargetDomainVerificationDetailsHttpRoute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRoute.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_target_domain

securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRoute()
```


## Classes <a name="Classes" id="Classes"></a>

### SecurityagentTargetDomainTagsList <a name="SecurityagentTargetDomainTagsList" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_target_domain

securityagentTargetDomain.SecurityagentTargetDomainTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityagentTargetDomainTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityagentTargetDomainTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a>]

---


### SecurityagentTargetDomainTagsOutputReference <a name="SecurityagentTargetDomainTagsOutputReference" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_target_domain

securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityagentTargetDomainTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a>

---


### SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference <a name="SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_target_domain

securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.dnsRecordName">dns_record_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.dnsRecordType">dns_record_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxt">SecurityagentTargetDomainVerificationDetailsDnsTxt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_record_name`<sup>Required</sup> <a name="dns_record_name" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.dnsRecordName"></a>

```python
dns_record_name: str
```

- *Type:* str

---

##### `dns_record_type`<sup>Required</sup> <a name="dns_record_type" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.dnsRecordType"></a>

```python
dns_record_type: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.internalValue"></a>

```python
internal_value: SecurityagentTargetDomainVerificationDetailsDnsTxt
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxt">SecurityagentTargetDomainVerificationDetailsDnsTxt</a>

---


### SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference <a name="SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_target_domain

securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.routePath">route_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRoute">SecurityagentTargetDomainVerificationDetailsHttpRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `route_path`<sup>Required</sup> <a name="route_path" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.routePath"></a>

```python
route_path: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.internalValue"></a>

```python
internal_value: SecurityagentTargetDomainVerificationDetailsHttpRoute
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRoute">SecurityagentTargetDomainVerificationDetailsHttpRoute</a>

---


### SecurityagentTargetDomainVerificationDetailsOutputReference <a name="SecurityagentTargetDomainVerificationDetailsOutputReference" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityagent_target_domain

securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.dnsTxt">dns_txt</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference">SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.httpRoute">http_route</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference">SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetails">SecurityagentTargetDomainVerificationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_txt`<sup>Required</sup> <a name="dns_txt" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.dnsTxt"></a>

```python
dns_txt: SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference">SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference</a>

---

##### `http_route`<sup>Required</sup> <a name="http_route" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.httpRoute"></a>

```python
http_route: SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference">SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference</a>

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: SecurityagentTargetDomainVerificationDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetails">SecurityagentTargetDomainVerificationDetails</a>

---



