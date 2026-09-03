# `ec2IpamResourceDiscovery` Submodule <a name="`ec2IpamResourceDiscovery` Submodule" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2IpamResourceDiscovery <a name="Ec2IpamResourceDiscovery" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_resource_discovery awscc_ec2_ipam_resource_discovery}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_resource_discovery

ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  operating_regions: IResolvable | typing.List[Ec2IpamResourceDiscoveryOperatingRegions] = None,
  organizational_unit_exclusions: IResolvable | typing.List[Ec2IpamResourceDiscoveryOrganizationalUnitExclusions] = None,
  tags: IResolvable | typing.List[Ec2IpamResourceDiscoveryTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_resource_discovery#description Ec2IpamResourceDiscovery#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.operatingRegions">operating_regions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a>]</code> | The regions Resource Discovery is enabled for. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.organizationalUnitExclusions">organizational_unit_exclusions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a>]</code> | A set of organizational unit (OU) exclusions for this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_resource_discovery#description Ec2IpamResourceDiscovery#description}.

---

##### `operating_regions`<sup>Optional</sup> <a name="operating_regions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.operatingRegions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a>]

The regions Resource Discovery is enabled for.

Allows resource discoveries to be created in these regions, as well as enabling monitoring

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_resource_discovery#operating_regions Ec2IpamResourceDiscovery#operating_regions}

---

##### `organizational_unit_exclusions`<sup>Optional</sup> <a name="organizational_unit_exclusions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.organizationalUnitExclusions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a>]

A set of organizational unit (OU) exclusions for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_resource_discovery#organizational_unit_exclusions Ec2IpamResourceDiscovery#organizational_unit_exclusions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_resource_discovery#tags Ec2IpamResourceDiscovery#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.putOperatingRegions">put_operating_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.putOrganizationalUnitExclusions">put_organizational_unit_exclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.resetOperatingRegions">reset_operating_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.resetOrganizationalUnitExclusions">reset_organizational_unit_exclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_operating_regions` <a name="put_operating_regions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.putOperatingRegions"></a>

```python
def put_operating_regions(
  value: IResolvable | typing.List[Ec2IpamResourceDiscoveryOperatingRegions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.putOperatingRegions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a>]

---

##### `put_organizational_unit_exclusions` <a name="put_organizational_unit_exclusions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.putOrganizationalUnitExclusions"></a>

```python
def put_organizational_unit_exclusions(
  value: IResolvable | typing.List[Ec2IpamResourceDiscoveryOrganizationalUnitExclusions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.putOrganizationalUnitExclusions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2IpamResourceDiscoveryTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_operating_regions` <a name="reset_operating_regions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.resetOperatingRegions"></a>

```python
def reset_operating_regions() -> None
```

##### `reset_organizational_unit_exclusions` <a name="reset_organizational_unit_exclusions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.resetOrganizationalUnitExclusions"></a>

```python
def reset_organizational_unit_exclusions() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2IpamResourceDiscovery resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_ipam_resource_discovery

ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_ipam_resource_discovery

ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_ipam_resource_discovery

ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_ipam_resource_discovery

ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2IpamResourceDiscovery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2IpamResourceDiscovery to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2IpamResourceDiscovery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_resource_discovery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2IpamResourceDiscovery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.ipamResourceDiscoveryArn">ipam_resource_discovery_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.ipamResourceDiscoveryId">ipam_resource_discovery_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.ipamResourceDiscoveryRegion">ipam_resource_discovery_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.isDefault">is_default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.operatingRegions">operating_regions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList">Ec2IpamResourceDiscoveryOperatingRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.organizationalUnitExclusions">organizational_unit_exclusions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList">Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList">Ec2IpamResourceDiscoveryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.operatingRegionsInput">operating_regions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.organizationalUnitExclusionsInput">organizational_unit_exclusions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.description">description</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipam_resource_discovery_arn`<sup>Required</sup> <a name="ipam_resource_discovery_arn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.ipamResourceDiscoveryArn"></a>

```python
ipam_resource_discovery_arn: str
```

- *Type:* str

---

##### `ipam_resource_discovery_id`<sup>Required</sup> <a name="ipam_resource_discovery_id" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.ipamResourceDiscoveryId"></a>

```python
ipam_resource_discovery_id: str
```

- *Type:* str

---

##### `ipam_resource_discovery_region`<sup>Required</sup> <a name="ipam_resource_discovery_region" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.ipamResourceDiscoveryRegion"></a>

```python
ipam_resource_discovery_region: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `operating_regions`<sup>Required</sup> <a name="operating_regions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.operatingRegions"></a>

```python
operating_regions: Ec2IpamResourceDiscoveryOperatingRegionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList">Ec2IpamResourceDiscoveryOperatingRegionsList</a>

---

##### `organizational_unit_exclusions`<sup>Required</sup> <a name="organizational_unit_exclusions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.organizationalUnitExclusions"></a>

```python
organizational_unit_exclusions: Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList">Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList</a>

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.tags"></a>

```python
tags: Ec2IpamResourceDiscoveryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList">Ec2IpamResourceDiscoveryTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `operating_regions_input`<sup>Optional</sup> <a name="operating_regions_input" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.operatingRegionsInput"></a>

```python
operating_regions_input: IResolvable | typing.List[Ec2IpamResourceDiscoveryOperatingRegions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a>]

---

##### `organizational_unit_exclusions_input`<sup>Optional</sup> <a name="organizational_unit_exclusions_input" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.organizationalUnitExclusionsInput"></a>

```python
organizational_unit_exclusions_input: IResolvable | typing.List[Ec2IpamResourceDiscoveryOrganizationalUnitExclusions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2IpamResourceDiscoveryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.description"></a>

```python
description: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscovery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamResourceDiscoveryConfig <a name="Ec2IpamResourceDiscoveryConfig" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_resource_discovery

ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  operating_regions: IResolvable | typing.List[Ec2IpamResourceDiscoveryOperatingRegions] = None,
  organizational_unit_exclusions: IResolvable | typing.List[Ec2IpamResourceDiscoveryOrganizationalUnitExclusions] = None,
  tags: IResolvable | typing.List[Ec2IpamResourceDiscoveryTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_resource_discovery#description Ec2IpamResourceDiscovery#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.operatingRegions">operating_regions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a>]</code> | The regions Resource Discovery is enabled for. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.organizationalUnitExclusions">organizational_unit_exclusions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a>]</code> | A set of organizational unit (OU) exclusions for this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_resource_discovery#description Ec2IpamResourceDiscovery#description}.

---

##### `operating_regions`<sup>Optional</sup> <a name="operating_regions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.operatingRegions"></a>

```python
operating_regions: IResolvable | typing.List[Ec2IpamResourceDiscoveryOperatingRegions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a>]

The regions Resource Discovery is enabled for.

Allows resource discoveries to be created in these regions, as well as enabling monitoring

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_resource_discovery#operating_regions Ec2IpamResourceDiscovery#operating_regions}

---

##### `organizational_unit_exclusions`<sup>Optional</sup> <a name="organizational_unit_exclusions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.organizationalUnitExclusions"></a>

```python
organizational_unit_exclusions: IResolvable | typing.List[Ec2IpamResourceDiscoveryOrganizationalUnitExclusions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a>]

A set of organizational unit (OU) exclusions for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_resource_discovery#organizational_unit_exclusions Ec2IpamResourceDiscovery#organizational_unit_exclusions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2IpamResourceDiscoveryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_resource_discovery#tags Ec2IpamResourceDiscovery#tags}

---

### Ec2IpamResourceDiscoveryOperatingRegions <a name="Ec2IpamResourceDiscoveryOperatingRegions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_resource_discovery

ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions(
  region_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions.property.regionName">region_name</a></code> | <code>str</code> | The name of the region. |

---

##### `region_name`<sup>Optional</sup> <a name="region_name" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

The name of the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_resource_discovery#region_name Ec2IpamResourceDiscovery#region_name}

---

### Ec2IpamResourceDiscoveryOrganizationalUnitExclusions <a name="Ec2IpamResourceDiscoveryOrganizationalUnitExclusions" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_resource_discovery

ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions(
  organizations_entity_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions.property.organizationsEntityPath">organizations_entity_path</a></code> | <code>str</code> | An AWS Organizations entity path. |

---

##### `organizations_entity_path`<sup>Optional</sup> <a name="organizations_entity_path" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions.property.organizationsEntityPath"></a>

```python
organizations_entity_path: str
```

- *Type:* str

An AWS Organizations entity path.

Build the path for the OU(s) using AWS Organizations IDs separated by a '/'. Include all child OUs by ending the path with '/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_resource_discovery#organizations_entity_path Ec2IpamResourceDiscovery#organizations_entity_path}

---

### Ec2IpamResourceDiscoveryTags <a name="Ec2IpamResourceDiscoveryTags" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_resource_discovery

ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_resource_discovery#key Ec2IpamResourceDiscovery#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_resource_discovery#value Ec2IpamResourceDiscovery#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2IpamResourceDiscoveryOperatingRegionsList <a name="Ec2IpamResourceDiscoveryOperatingRegionsList" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_resource_discovery

ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2IpamResourceDiscoveryOperatingRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2IpamResourceDiscoveryOperatingRegions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a>]

---


### Ec2IpamResourceDiscoveryOperatingRegionsOutputReference <a name="Ec2IpamResourceDiscoveryOperatingRegionsOutputReference" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_resource_discovery

ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.resetRegionName">reset_region_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_region_name` <a name="reset_region_name" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.resetRegionName"></a>

```python
def reset_region_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.property.regionNameInput">region_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_name_input`<sup>Optional</sup> <a name="region_name_input" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.property.regionNameInput"></a>

```python
region_name_input: str
```

- *Type:* str

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2IpamResourceDiscoveryOperatingRegions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOperatingRegions">Ec2IpamResourceDiscoveryOperatingRegions</a>

---


### Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList <a name="Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_resource_discovery

ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2IpamResourceDiscoveryOrganizationalUnitExclusions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a>]

---


### Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference <a name="Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_resource_discovery

ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resetOrganizationsEntityPath">reset_organizations_entity_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_organizations_entity_path` <a name="reset_organizations_entity_path" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resetOrganizationsEntityPath"></a>

```python
def reset_organizations_entity_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.organizationsEntityPathInput">organizations_entity_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.organizationsEntityPath">organizations_entity_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `organizations_entity_path_input`<sup>Optional</sup> <a name="organizations_entity_path_input" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.organizationsEntityPathInput"></a>

```python
organizations_entity_path_input: str
```

- *Type:* str

---

##### `organizations_entity_path`<sup>Required</sup> <a name="organizations_entity_path" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.organizationsEntityPath"></a>

```python
organizations_entity_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2IpamResourceDiscoveryOrganizationalUnitExclusions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryOrganizationalUnitExclusions">Ec2IpamResourceDiscoveryOrganizationalUnitExclusions</a>

---


### Ec2IpamResourceDiscoveryTagsList <a name="Ec2IpamResourceDiscoveryTagsList" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_resource_discovery

ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2IpamResourceDiscoveryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2IpamResourceDiscoveryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a>]

---


### Ec2IpamResourceDiscoveryTagsOutputReference <a name="Ec2IpamResourceDiscoveryTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_resource_discovery

ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2IpamResourceDiscoveryTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamResourceDiscovery.Ec2IpamResourceDiscoveryTags">Ec2IpamResourceDiscoveryTags</a>

---



