# `codeartifactPackageGroup` Submodule <a name="`codeartifactPackageGroup` Submodule" id="@cdktn/provider-awscc.codeartifactPackageGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeartifactPackageGroup <a name="CodeartifactPackageGroup" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group awscc_codeartifact_package_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer"></a>

```python
from cdktn_provider_awscc import codeartifact_package_group

codeartifactPackageGroup.CodeartifactPackageGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name: str,
  pattern: str,
  contact_info: str = None,
  description: str = None,
  domain_owner: str = None,
  origin_configuration: CodeartifactPackageGroupOriginConfiguration = None,
  tags: IResolvable | typing.List[CodeartifactPackageGroupTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | The name of the domain that contains the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.pattern">pattern</a></code> | <code>str</code> | The package group pattern that is used to gather packages. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.contactInfo">contact_info</a></code> | <code>str</code> | The contact info of the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | The text description of the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.domainOwner">domain_owner</a></code> | <code>str</code> | The 12-digit account ID of the AWS account that owns the domain. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.originConfiguration">origin_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a></code> | The package origin configuration of the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>]</code> | An array of key-value pairs to apply to the package group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.domainName"></a>

- *Type:* str

The name of the domain that contains the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#domain_name CodeartifactPackageGroup#domain_name}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.pattern"></a>

- *Type:* str

The package group pattern that is used to gather packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#pattern CodeartifactPackageGroup#pattern}

---

##### `contact_info`<sup>Optional</sup> <a name="contact_info" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.contactInfo"></a>

- *Type:* str

The contact info of the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#contact_info CodeartifactPackageGroup#contact_info}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.description"></a>

- *Type:* str

The text description of the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#description CodeartifactPackageGroup#description}

---

##### `domain_owner`<sup>Optional</sup> <a name="domain_owner" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.domainOwner"></a>

- *Type:* str

The 12-digit account ID of the AWS account that owns the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#domain_owner CodeartifactPackageGroup#domain_owner}

---

##### `origin_configuration`<sup>Optional</sup> <a name="origin_configuration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.originConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a>

The package origin configuration of the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#origin_configuration CodeartifactPackageGroup#origin_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>]

An array of key-value pairs to apply to the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#tags CodeartifactPackageGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putOriginConfiguration">put_origin_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetContactInfo">reset_contact_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetDomainOwner">reset_domain_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetOriginConfiguration">reset_origin_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_origin_configuration` <a name="put_origin_configuration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putOriginConfiguration"></a>

```python
def put_origin_configuration(
  restrictions: CodeartifactPackageGroupOriginConfigurationRestrictions = None
) -> None
```

###### `restrictions`<sup>Optional</sup> <a name="restrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putOriginConfiguration.parameter.restrictions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a>

The origin configuration that is applied to the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#restrictions CodeartifactPackageGroup#restrictions}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CodeartifactPackageGroupTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>]

---

##### `reset_contact_info` <a name="reset_contact_info" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetContactInfo"></a>

```python
def reset_contact_info() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_domain_owner` <a name="reset_domain_owner" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetDomainOwner"></a>

```python
def reset_domain_owner() -> None
```

##### `reset_origin_configuration` <a name="reset_origin_configuration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetOriginConfiguration"></a>

```python
def reset_origin_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CodeartifactPackageGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import codeartifact_package_group

codeartifactPackageGroup.CodeartifactPackageGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import codeartifact_package_group

codeartifactPackageGroup.CodeartifactPackageGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import codeartifact_package_group

codeartifactPackageGroup.CodeartifactPackageGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import codeartifact_package_group

codeartifactPackageGroup.CodeartifactPackageGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CodeartifactPackageGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CodeartifactPackageGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CodeartifactPackageGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CodeartifactPackageGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.originConfiguration">origin_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference">CodeartifactPackageGroupOriginConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList">CodeartifactPackageGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.contactInfoInput">contact_info_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainOwnerInput">domain_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.originConfigurationInput">origin_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.contactInfo">contact_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainOwner">domain_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `origin_configuration`<sup>Required</sup> <a name="origin_configuration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.originConfiguration"></a>

```python
origin_configuration: CodeartifactPackageGroupOriginConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference">CodeartifactPackageGroupOriginConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tags"></a>

```python
tags: CodeartifactPackageGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList">CodeartifactPackageGroupTagsList</a>

---

##### `contact_info_input`<sup>Optional</sup> <a name="contact_info_input" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.contactInfoInput"></a>

```python
contact_info_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `domain_owner_input`<sup>Optional</sup> <a name="domain_owner_input" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainOwnerInput"></a>

```python
domain_owner_input: str
```

- *Type:* str

---

##### `origin_configuration_input`<sup>Optional</sup> <a name="origin_configuration_input" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.originConfigurationInput"></a>

```python
origin_configuration_input: IResolvable | CodeartifactPackageGroupOriginConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a>

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CodeartifactPackageGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>]

---

##### `contact_info`<sup>Required</sup> <a name="contact_info" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.contactInfo"></a>

```python
contact_info: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `domain_owner`<sup>Required</sup> <a name="domain_owner" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainOwner"></a>

```python
domain_owner: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodeartifactPackageGroupConfig <a name="CodeartifactPackageGroupConfig" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import codeartifact_package_group

codeartifactPackageGroup.CodeartifactPackageGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name: str,
  pattern: str,
  contact_info: str = None,
  description: str = None,
  domain_owner: str = None,
  origin_configuration: CodeartifactPackageGroupOriginConfiguration = None,
  tags: IResolvable | typing.List[CodeartifactPackageGroupTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.domainName">domain_name</a></code> | <code>str</code> | The name of the domain that contains the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.pattern">pattern</a></code> | <code>str</code> | The package group pattern that is used to gather packages. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.contactInfo">contact_info</a></code> | <code>str</code> | The contact info of the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.description">description</a></code> | <code>str</code> | The text description of the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.domainOwner">domain_owner</a></code> | <code>str</code> | The 12-digit account ID of the AWS account that owns the domain. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.originConfiguration">origin_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a></code> | The package origin configuration of the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>]</code> | An array of key-value pairs to apply to the package group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

The name of the domain that contains the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#domain_name CodeartifactPackageGroup#domain_name}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

The package group pattern that is used to gather packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#pattern CodeartifactPackageGroup#pattern}

---

##### `contact_info`<sup>Optional</sup> <a name="contact_info" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.contactInfo"></a>

```python
contact_info: str
```

- *Type:* str

The contact info of the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#contact_info CodeartifactPackageGroup#contact_info}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The text description of the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#description CodeartifactPackageGroup#description}

---

##### `domain_owner`<sup>Optional</sup> <a name="domain_owner" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.domainOwner"></a>

```python
domain_owner: str
```

- *Type:* str

The 12-digit account ID of the AWS account that owns the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#domain_owner CodeartifactPackageGroup#domain_owner}

---

##### `origin_configuration`<sup>Optional</sup> <a name="origin_configuration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.originConfiguration"></a>

```python
origin_configuration: CodeartifactPackageGroupOriginConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a>

The package origin configuration of the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#origin_configuration CodeartifactPackageGroup#origin_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CodeartifactPackageGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>]

An array of key-value pairs to apply to the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#tags CodeartifactPackageGroup#tags}

---

### CodeartifactPackageGroupOriginConfiguration <a name="CodeartifactPackageGroupOriginConfiguration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import codeartifact_package_group

codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration(
  restrictions: CodeartifactPackageGroupOriginConfigurationRestrictions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration.property.restrictions">restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a></code> | The origin configuration that is applied to the package group. |

---

##### `restrictions`<sup>Optional</sup> <a name="restrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration.property.restrictions"></a>

```python
restrictions: CodeartifactPackageGroupOriginConfigurationRestrictions
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a>

The origin configuration that is applied to the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#restrictions CodeartifactPackageGroup#restrictions}

---

### CodeartifactPackageGroupOriginConfigurationRestrictions <a name="CodeartifactPackageGroupOriginConfigurationRestrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.Initializer"></a>

```python
from cdktn_provider_awscc import codeartifact_package_group

codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions(
  external_upstream: CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream = None,
  internal_upstream: CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream = None,
  publish: CodeartifactPackageGroupOriginConfigurationRestrictionsPublish = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.externalUpstream">external_upstream</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a></code> | The external upstream restriction determines if new package versions can be ingested or retained from external connections. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.internalUpstream">internal_upstream</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a></code> | The internal upstream restriction determines if new package versions can be ingested or retained from upstream repositories. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.publish">publish</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a></code> | The publish restriction determines if new package versions can be published. |

---

##### `external_upstream`<sup>Optional</sup> <a name="external_upstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.externalUpstream"></a>

```python
external_upstream: CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a>

The external upstream restriction determines if new package versions can be ingested or retained from external connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#external_upstream CodeartifactPackageGroup#external_upstream}

---

##### `internal_upstream`<sup>Optional</sup> <a name="internal_upstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.internalUpstream"></a>

```python
internal_upstream: CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a>

The internal upstream restriction determines if new package versions can be ingested or retained from upstream repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#internal_upstream CodeartifactPackageGroup#internal_upstream}

---

##### `publish`<sup>Optional</sup> <a name="publish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.publish"></a>

```python
publish: CodeartifactPackageGroupOriginConfigurationRestrictionsPublish
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a>

The publish restriction determines if new package versions can be published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#publish CodeartifactPackageGroup#publish}

---

### CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.Initializer"></a>

```python
from cdktn_provider_awscc import codeartifact_package_group

codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream(
  repositories: typing.List[str] = None,
  restriction_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.property.repositories">repositories</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.property.restrictionMode">restriction_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}. |

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.property.repositories"></a>

```python
repositories: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}.

---

##### `restriction_mode`<sup>Optional</sup> <a name="restriction_mode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.property.restrictionMode"></a>

```python
restriction_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}.

---

### CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.Initializer"></a>

```python
from cdktn_provider_awscc import codeartifact_package_group

codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream(
  repositories: typing.List[str] = None,
  restriction_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.property.repositories">repositories</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.property.restrictionMode">restriction_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}. |

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.property.repositories"></a>

```python
repositories: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}.

---

##### `restriction_mode`<sup>Optional</sup> <a name="restriction_mode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.property.restrictionMode"></a>

```python
restriction_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}.

---

### CodeartifactPackageGroupOriginConfigurationRestrictionsPublish <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsPublish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.Initializer"></a>

```python
from cdktn_provider_awscc import codeartifact_package_group

codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish(
  repositories: typing.List[str] = None,
  restriction_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.property.repositories">repositories</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.property.restrictionMode">restriction_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}. |

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.property.repositories"></a>

```python
repositories: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}.

---

##### `restriction_mode`<sup>Optional</sup> <a name="restriction_mode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.property.restrictionMode"></a>

```python
restriction_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}.

---

### CodeartifactPackageGroupTags <a name="CodeartifactPackageGroupTags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import codeartifact_package_group

codeartifactPackageGroup.CodeartifactPackageGroupTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#key CodeartifactPackageGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#value CodeartifactPackageGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CodeartifactPackageGroupOriginConfigurationOutputReference <a name="CodeartifactPackageGroupOriginConfigurationOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codeartifact_package_group

codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.putRestrictions">put_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.resetRestrictions">reset_restrictions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_restrictions` <a name="put_restrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.putRestrictions"></a>

```python
def put_restrictions(
  external_upstream: CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream = None,
  internal_upstream: CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream = None,
  publish: CodeartifactPackageGroupOriginConfigurationRestrictionsPublish = None
) -> None
```

###### `external_upstream`<sup>Optional</sup> <a name="external_upstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.putRestrictions.parameter.externalUpstream"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a>

The external upstream restriction determines if new package versions can be ingested or retained from external connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#external_upstream CodeartifactPackageGroup#external_upstream}

---

###### `internal_upstream`<sup>Optional</sup> <a name="internal_upstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.putRestrictions.parameter.internalUpstream"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a>

The internal upstream restriction determines if new package versions can be ingested or retained from upstream repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#internal_upstream CodeartifactPackageGroup#internal_upstream}

---

###### `publish`<sup>Optional</sup> <a name="publish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.putRestrictions.parameter.publish"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a>

The publish restriction determines if new package versions can be published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#publish CodeartifactPackageGroup#publish}

---

##### `reset_restrictions` <a name="reset_restrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.resetRestrictions"></a>

```python
def reset_restrictions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.restrictions">restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.restrictionsInput">restrictions_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.restrictions"></a>

```python
restrictions: CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference</a>

---

##### `restrictions_input`<sup>Optional</sup> <a name="restrictions_input" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.restrictionsInput"></a>

```python
restrictions_input: IResolvable | CodeartifactPackageGroupOriginConfigurationRestrictions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodeartifactPackageGroupOriginConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a>

---


### CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codeartifact_package_group

codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resetRepositories">reset_repositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resetRestrictionMode">reset_restriction_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_repositories` <a name="reset_repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resetRepositories"></a>

```python
def reset_repositories() -> None
```

##### `reset_restriction_mode` <a name="reset_restriction_mode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resetRestrictionMode"></a>

```python
def reset_restriction_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.repositoriesInput">repositories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.restrictionModeInput">restriction_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.repositories">repositories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.restrictionMode">restriction_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repositories_input`<sup>Optional</sup> <a name="repositories_input" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.repositoriesInput"></a>

```python
repositories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restriction_mode_input`<sup>Optional</sup> <a name="restriction_mode_input" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.restrictionModeInput"></a>

```python
restriction_mode_input: str
```

- *Type:* str

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.repositories"></a>

```python
repositories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restriction_mode`<sup>Required</sup> <a name="restriction_mode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.restrictionMode"></a>

```python
restriction_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a>

---


### CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codeartifact_package_group

codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resetRepositories">reset_repositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resetRestrictionMode">reset_restriction_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_repositories` <a name="reset_repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resetRepositories"></a>

```python
def reset_repositories() -> None
```

##### `reset_restriction_mode` <a name="reset_restriction_mode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resetRestrictionMode"></a>

```python
def reset_restriction_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.repositoriesInput">repositories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.restrictionModeInput">restriction_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.repositories">repositories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.restrictionMode">restriction_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repositories_input`<sup>Optional</sup> <a name="repositories_input" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.repositoriesInput"></a>

```python
repositories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restriction_mode_input`<sup>Optional</sup> <a name="restriction_mode_input" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.restrictionModeInput"></a>

```python
restriction_mode_input: str
```

- *Type:* str

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.repositories"></a>

```python
repositories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restriction_mode`<sup>Required</sup> <a name="restriction_mode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.restrictionMode"></a>

```python
restriction_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a>

---


### CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codeartifact_package_group

codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putExternalUpstream">put_external_upstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putInternalUpstream">put_internal_upstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putPublish">put_publish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetExternalUpstream">reset_external_upstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetInternalUpstream">reset_internal_upstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetPublish">reset_publish</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_external_upstream` <a name="put_external_upstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putExternalUpstream"></a>

```python
def put_external_upstream(
  repositories: typing.List[str] = None,
  restriction_mode: str = None
) -> None
```

###### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putExternalUpstream.parameter.repositories"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}.

---

###### `restriction_mode`<sup>Optional</sup> <a name="restriction_mode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putExternalUpstream.parameter.restrictionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}.

---

##### `put_internal_upstream` <a name="put_internal_upstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putInternalUpstream"></a>

```python
def put_internal_upstream(
  repositories: typing.List[str] = None,
  restriction_mode: str = None
) -> None
```

###### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putInternalUpstream.parameter.repositories"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}.

---

###### `restriction_mode`<sup>Optional</sup> <a name="restriction_mode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putInternalUpstream.parameter.restrictionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}.

---

##### `put_publish` <a name="put_publish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putPublish"></a>

```python
def put_publish(
  repositories: typing.List[str] = None,
  restriction_mode: str = None
) -> None
```

###### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putPublish.parameter.repositories"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}.

---

###### `restriction_mode`<sup>Optional</sup> <a name="restriction_mode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putPublish.parameter.restrictionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}.

---

##### `reset_external_upstream` <a name="reset_external_upstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetExternalUpstream"></a>

```python
def reset_external_upstream() -> None
```

##### `reset_internal_upstream` <a name="reset_internal_upstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetInternalUpstream"></a>

```python
def reset_internal_upstream() -> None
```

##### `reset_publish` <a name="reset_publish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetPublish"></a>

```python
def reset_publish() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.externalUpstream">external_upstream</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalUpstream">internal_upstream</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.publish">publish</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.externalUpstreamInput">external_upstream_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalUpstreamInput">internal_upstream_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.publishInput">publish_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_upstream`<sup>Required</sup> <a name="external_upstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.externalUpstream"></a>

```python
external_upstream: CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference</a>

---

##### `internal_upstream`<sup>Required</sup> <a name="internal_upstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalUpstream"></a>

```python
internal_upstream: CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference</a>

---

##### `publish`<sup>Required</sup> <a name="publish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.publish"></a>

```python
publish: CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference</a>

---

##### `external_upstream_input`<sup>Optional</sup> <a name="external_upstream_input" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.externalUpstreamInput"></a>

```python
external_upstream_input: IResolvable | CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a>

---

##### `internal_upstream_input`<sup>Optional</sup> <a name="internal_upstream_input" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalUpstreamInput"></a>

```python
internal_upstream_input: IResolvable | CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a>

---

##### `publish_input`<sup>Optional</sup> <a name="publish_input" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.publishInput"></a>

```python
publish_input: IResolvable | CodeartifactPackageGroupOriginConfigurationRestrictionsPublish
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodeartifactPackageGroupOriginConfigurationRestrictions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a>

---


### CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codeartifact_package_group

codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resetRepositories">reset_repositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resetRestrictionMode">reset_restriction_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_repositories` <a name="reset_repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resetRepositories"></a>

```python
def reset_repositories() -> None
```

##### `reset_restriction_mode` <a name="reset_restriction_mode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resetRestrictionMode"></a>

```python
def reset_restriction_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.repositoriesInput">repositories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.restrictionModeInput">restriction_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.repositories">repositories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.restrictionMode">restriction_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repositories_input`<sup>Optional</sup> <a name="repositories_input" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.repositoriesInput"></a>

```python
repositories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restriction_mode_input`<sup>Optional</sup> <a name="restriction_mode_input" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.restrictionModeInput"></a>

```python
restriction_mode_input: str
```

- *Type:* str

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.repositories"></a>

```python
repositories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restriction_mode`<sup>Required</sup> <a name="restriction_mode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.restrictionMode"></a>

```python
restriction_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodeartifactPackageGroupOriginConfigurationRestrictionsPublish
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a>

---


### CodeartifactPackageGroupTagsList <a name="CodeartifactPackageGroupTagsList" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import codeartifact_package_group

codeartifactPackageGroup.CodeartifactPackageGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodeartifactPackageGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CodeartifactPackageGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>]

---


### CodeartifactPackageGroupTagsOutputReference <a name="CodeartifactPackageGroupTagsOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codeartifact_package_group

codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodeartifactPackageGroupTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>

---



