# `servicediscoveryPublicDnsNamespace` Submodule <a name="`servicediscoveryPublicDnsNamespace` Submodule" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicediscoveryPublicDnsNamespace <a name="ServicediscoveryPublicDnsNamespace" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace awscc_servicediscovery_public_dns_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_public_dns_namespace

servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  properties: ServicediscoveryPublicDnsNamespaceProperties = None,
  tags: IResolvable | typing.List[ServicediscoveryPublicDnsNamespaceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.name">name</a></code> | <code>str</code> | The name that you want to assign to this namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a></code> | Properties for the public DNS namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>]</code> | The tags for the namespace. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.name"></a>

- *Type:* str

The name that you want to assign to this namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#name ServicediscoveryPublicDnsNamespace#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.description"></a>

- *Type:* str

A description for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#description ServicediscoveryPublicDnsNamespace#description}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a>

Properties for the public DNS namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#properties ServicediscoveryPublicDnsNamespace#properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>]

The tags for the namespace.

Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#tags ServicediscoveryPublicDnsNamespace#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_properties` <a name="put_properties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.putProperties"></a>

```python
def put_properties(
  dns_properties: ServicediscoveryPublicDnsNamespacePropertiesDnsProperties = None
) -> None
```

###### `dns_properties`<sup>Optional</sup> <a name="dns_properties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.putProperties.parameter.dnsProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#dns_properties ServicediscoveryPublicDnsNamespace#dns_properties}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ServicediscoveryPublicDnsNamespaceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ServicediscoveryPublicDnsNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isConstruct"></a>

```python
from cdktn_provider_awscc import servicediscovery_public_dns_namespace

servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isTerraformElement"></a>

```python
from cdktn_provider_awscc import servicediscovery_public_dns_namespace

servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isTerraformResource"></a>

```python
from cdktn_provider_awscc import servicediscovery_public_dns_namespace

servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import servicediscovery_public_dns_namespace

servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ServicediscoveryPublicDnsNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicediscoveryPublicDnsNamespace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicediscoveryPublicDnsNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicediscoveryPublicDnsNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference">ServicediscoveryPublicDnsNamespacePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.publicDnsNamespaceId">public_dns_namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList">ServicediscoveryPublicDnsNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.propertiesInput">properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.properties"></a>

```python
properties: ServicediscoveryPublicDnsNamespacePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference">ServicediscoveryPublicDnsNamespacePropertiesOutputReference</a>

---

##### `public_dns_namespace_id`<sup>Required</sup> <a name="public_dns_namespace_id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.publicDnsNamespaceId"></a>

```python
public_dns_namespace_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.tags"></a>

```python
tags: ServicediscoveryPublicDnsNamespaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList">ServicediscoveryPublicDnsNamespaceTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.propertiesInput"></a>

```python
properties_input: IResolvable | ServicediscoveryPublicDnsNamespaceProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ServicediscoveryPublicDnsNamespaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicediscoveryPublicDnsNamespaceConfig <a name="ServicediscoveryPublicDnsNamespaceConfig" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_public_dns_namespace

servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  properties: ServicediscoveryPublicDnsNamespaceProperties = None,
  tags: IResolvable | typing.List[ServicediscoveryPublicDnsNamespaceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.name">name</a></code> | <code>str</code> | The name that you want to assign to this namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.description">description</a></code> | <code>str</code> | A description for the namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a></code> | Properties for the public DNS namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>]</code> | The tags for the namespace. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name that you want to assign to this namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#name ServicediscoveryPublicDnsNamespace#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#description ServicediscoveryPublicDnsNamespace#description}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.properties"></a>

```python
properties: ServicediscoveryPublicDnsNamespaceProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a>

Properties for the public DNS namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#properties ServicediscoveryPublicDnsNamespace#properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ServicediscoveryPublicDnsNamespaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>]

The tags for the namespace.

Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#tags ServicediscoveryPublicDnsNamespace#tags}

---

### ServicediscoveryPublicDnsNamespaceProperties <a name="ServicediscoveryPublicDnsNamespaceProperties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_public_dns_namespace

servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties(
  dns_properties: ServicediscoveryPublicDnsNamespacePropertiesDnsProperties = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties.property.dnsProperties">dns_properties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#dns_properties ServicediscoveryPublicDnsNamespace#dns_properties}. |

---

##### `dns_properties`<sup>Optional</sup> <a name="dns_properties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties.property.dnsProperties"></a>

```python
dns_properties: ServicediscoveryPublicDnsNamespacePropertiesDnsProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#dns_properties ServicediscoveryPublicDnsNamespace#dns_properties}.

---

### ServicediscoveryPublicDnsNamespacePropertiesDnsProperties <a name="ServicediscoveryPublicDnsNamespacePropertiesDnsProperties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_public_dns_namespace

servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties(
  soa: ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties.property.soa">soa</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#soa ServicediscoveryPublicDnsNamespace#soa}. |

---

##### `soa`<sup>Optional</sup> <a name="soa" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties.property.soa"></a>

```python
soa: ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#soa ServicediscoveryPublicDnsNamespace#soa}.

---

### ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa <a name="ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_public_dns_namespace

servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa(
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#ttl ServicediscoveryPublicDnsNamespace#ttl}. |

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#ttl ServicediscoveryPublicDnsNamespace#ttl}.

---

### ServicediscoveryPublicDnsNamespaceTags <a name="ServicediscoveryPublicDnsNamespaceTags" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_public_dns_namespace

servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#key ServicediscoveryPublicDnsNamespace#key}. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#value ServicediscoveryPublicDnsNamespace#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#key ServicediscoveryPublicDnsNamespace#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#value ServicediscoveryPublicDnsNamespace#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference <a name="ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_public_dns_namespace

servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.putSoa">put_soa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resetSoa">reset_soa</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_soa` <a name="put_soa" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.putSoa"></a>

```python
def put_soa(
  ttl: typing.Union[int, float] = None
) -> None
```

###### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.putSoa.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#ttl ServicediscoveryPublicDnsNamespace#ttl}.

---

##### `reset_soa` <a name="reset_soa" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resetSoa"></a>

```python
def reset_soa() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa">soa</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.soaInput">soa_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `soa`<sup>Required</sup> <a name="soa" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa"></a>

```python
soa: ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a>

---

##### `soa_input`<sup>Optional</sup> <a name="soa_input" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.soaInput"></a>

```python
soa_input: IResolvable | ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicediscoveryPublicDnsNamespacePropertiesDnsProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a>

---


### ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference <a name="ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_public_dns_namespace

servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ttl` <a name="reset_ttl" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a>

---


### ServicediscoveryPublicDnsNamespacePropertiesOutputReference <a name="ServicediscoveryPublicDnsNamespacePropertiesOutputReference" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_public_dns_namespace

servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.putDnsProperties">put_dns_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.resetDnsProperties">reset_dns_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dns_properties` <a name="put_dns_properties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.putDnsProperties"></a>

```python
def put_dns_properties(
  soa: ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa = None
) -> None
```

###### `soa`<sup>Optional</sup> <a name="soa" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.putDnsProperties.parameter.soa"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_public_dns_namespace#soa ServicediscoveryPublicDnsNamespace#soa}.

---

##### `reset_dns_properties` <a name="reset_dns_properties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.resetDnsProperties"></a>

```python
def reset_dns_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.dnsProperties">dns_properties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.dnsPropertiesInput">dns_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_properties`<sup>Required</sup> <a name="dns_properties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.dnsProperties"></a>

```python
dns_properties: ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference</a>

---

##### `dns_properties_input`<sup>Optional</sup> <a name="dns_properties_input" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.dnsPropertiesInput"></a>

```python
dns_properties_input: IResolvable | ServicediscoveryPublicDnsNamespacePropertiesDnsProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicediscoveryPublicDnsNamespaceProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a>

---


### ServicediscoveryPublicDnsNamespaceTagsList <a name="ServicediscoveryPublicDnsNamespaceTagsList" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_public_dns_namespace

servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServicediscoveryPublicDnsNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ServicediscoveryPublicDnsNamespaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>]

---


### ServicediscoveryPublicDnsNamespaceTagsOutputReference <a name="ServicediscoveryPublicDnsNamespaceTagsOutputReference" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_public_dns_namespace

servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicediscoveryPublicDnsNamespaceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>

---



