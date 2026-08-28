# `servicediscoveryPrivateDnsNamespace` Submodule <a name="`servicediscoveryPrivateDnsNamespace` Submodule" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicediscoveryPrivateDnsNamespace <a name="ServicediscoveryPrivateDnsNamespace" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace awscc_servicediscovery_private_dns_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_private_dns_namespace

servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace(
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
  properties: ServicediscoveryPrivateDnsNamespaceProperties = None,
  tags: IResolvable | typing.List[ServicediscoveryPrivateDnsNamespaceTags] = None,
  vpc: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.name">name</a></code> | <code>str</code> | The name that you want to assign to this namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a></code> | Properties of the private DNS namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>]</code> | The tags for the namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.vpc">vpc</a></code> | <code>str</code> | The ID of the Amazon VPC that you want to associate the namespace with. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.name"></a>

- *Type:* str

The name that you want to assign to this namespace.

When you create a private DNS namespace, AWS Cloud Map automatically creates an Amazon Route 53 private hosted zone that has the same name as the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#name ServicediscoveryPrivateDnsNamespace#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.description"></a>

- *Type:* str

A description of the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#description ServicediscoveryPrivateDnsNamespace#description}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a>

Properties of the private DNS namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#properties ServicediscoveryPrivateDnsNamespace#properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>]

The tags for the namespace.

Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#tags ServicediscoveryPrivateDnsNamespace#tags}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.vpc"></a>

- *Type:* str

The ID of the Amazon VPC that you want to associate the namespace with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#vpc ServicediscoveryPrivateDnsNamespace#vpc}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetVpc">reset_vpc</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_properties` <a name="put_properties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.putProperties"></a>

```python
def put_properties(
  dns_properties: ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties = None
) -> None
```

###### `dns_properties`<sup>Optional</sup> <a name="dns_properties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.putProperties.parameter.dnsProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#dns_properties ServicediscoveryPrivateDnsNamespace#dns_properties}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ServicediscoveryPrivateDnsNamespaceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc` <a name="reset_vpc" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetVpc"></a>

```python
def reset_vpc() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ServicediscoveryPrivateDnsNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isConstruct"></a>

```python
from cdktn_provider_awscc import servicediscovery_private_dns_namespace

servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isTerraformElement"></a>

```python
from cdktn_provider_awscc import servicediscovery_private_dns_namespace

servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isTerraformResource"></a>

```python
from cdktn_provider_awscc import servicediscovery_private_dns_namespace

servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import servicediscovery_private_dns_namespace

servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ServicediscoveryPrivateDnsNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicediscoveryPrivateDnsNamespace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicediscoveryPrivateDnsNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicediscoveryPrivateDnsNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.privateDnsNamespaceId">private_dns_namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference">ServicediscoveryPrivateDnsNamespacePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList">ServicediscoveryPrivateDnsNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.propertiesInput">properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.vpcInput">vpc_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.vpc">vpc</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `private_dns_namespace_id`<sup>Required</sup> <a name="private_dns_namespace_id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.privateDnsNamespaceId"></a>

```python
private_dns_namespace_id: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.properties"></a>

```python
properties: ServicediscoveryPrivateDnsNamespacePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference">ServicediscoveryPrivateDnsNamespacePropertiesOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.tags"></a>

```python
tags: ServicediscoveryPrivateDnsNamespaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList">ServicediscoveryPrivateDnsNamespaceTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.propertiesInput"></a>

```python
properties_input: IResolvable | ServicediscoveryPrivateDnsNamespaceProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ServicediscoveryPrivateDnsNamespaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>]

---

##### `vpc_input`<sup>Optional</sup> <a name="vpc_input" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.vpcInput"></a>

```python
vpc_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.vpc"></a>

```python
vpc: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicediscoveryPrivateDnsNamespaceConfig <a name="ServicediscoveryPrivateDnsNamespaceConfig" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_private_dns_namespace

servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  properties: ServicediscoveryPrivateDnsNamespaceProperties = None,
  tags: IResolvable | typing.List[ServicediscoveryPrivateDnsNamespaceTags] = None,
  vpc: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.name">name</a></code> | <code>str</code> | The name that you want to assign to this namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.description">description</a></code> | <code>str</code> | A description of the namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a></code> | Properties of the private DNS namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>]</code> | The tags for the namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.vpc">vpc</a></code> | <code>str</code> | The ID of the Amazon VPC that you want to associate the namespace with. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name that you want to assign to this namespace.

When you create a private DNS namespace, AWS Cloud Map automatically creates an Amazon Route 53 private hosted zone that has the same name as the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#name ServicediscoveryPrivateDnsNamespace#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#description ServicediscoveryPrivateDnsNamespace#description}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.properties"></a>

```python
properties: ServicediscoveryPrivateDnsNamespaceProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a>

Properties of the private DNS namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#properties ServicediscoveryPrivateDnsNamespace#properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ServicediscoveryPrivateDnsNamespaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>]

The tags for the namespace.

Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#tags ServicediscoveryPrivateDnsNamespace#tags}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.vpc"></a>

```python
vpc: str
```

- *Type:* str

The ID of the Amazon VPC that you want to associate the namespace with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#vpc ServicediscoveryPrivateDnsNamespace#vpc}

---

### ServicediscoveryPrivateDnsNamespaceProperties <a name="ServicediscoveryPrivateDnsNamespaceProperties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_private_dns_namespace

servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties(
  dns_properties: ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties.property.dnsProperties">dns_properties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#dns_properties ServicediscoveryPrivateDnsNamespace#dns_properties}. |

---

##### `dns_properties`<sup>Optional</sup> <a name="dns_properties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties.property.dnsProperties"></a>

```python
dns_properties: ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#dns_properties ServicediscoveryPrivateDnsNamespace#dns_properties}.

---

### ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties <a name="ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_private_dns_namespace

servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties(
  soa: ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties.property.soa">soa</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#soa ServicediscoveryPrivateDnsNamespace#soa}. |

---

##### `soa`<sup>Optional</sup> <a name="soa" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties.property.soa"></a>

```python
soa: ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#soa ServicediscoveryPrivateDnsNamespace#soa}.

---

### ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa <a name="ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_private_dns_namespace

servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa(
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#ttl ServicediscoveryPrivateDnsNamespace#ttl}. |

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#ttl ServicediscoveryPrivateDnsNamespace#ttl}.

---

### ServicediscoveryPrivateDnsNamespaceTags <a name="ServicediscoveryPrivateDnsNamespaceTags" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_private_dns_namespace

servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#key ServicediscoveryPrivateDnsNamespace#key}. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#value ServicediscoveryPrivateDnsNamespace#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#key ServicediscoveryPrivateDnsNamespace#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#value ServicediscoveryPrivateDnsNamespace#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference <a name="ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_private_dns_namespace

servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.putSoa">put_soa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resetSoa">reset_soa</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_soa` <a name="put_soa" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.putSoa"></a>

```python
def put_soa(
  ttl: typing.Union[int, float] = None
) -> None
```

###### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.putSoa.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#ttl ServicediscoveryPrivateDnsNamespace#ttl}.

---

##### `reset_soa` <a name="reset_soa" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resetSoa"></a>

```python
def reset_soa() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa">soa</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.soaInput">soa_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `soa`<sup>Required</sup> <a name="soa" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa"></a>

```python
soa: ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a>

---

##### `soa_input`<sup>Optional</sup> <a name="soa_input" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.soaInput"></a>

```python
soa_input: IResolvable | ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a>

---


### ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference <a name="ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_private_dns_namespace

servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ttl` <a name="reset_ttl" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a>

---


### ServicediscoveryPrivateDnsNamespacePropertiesOutputReference <a name="ServicediscoveryPrivateDnsNamespacePropertiesOutputReference" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_private_dns_namespace

servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.putDnsProperties">put_dns_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resetDnsProperties">reset_dns_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dns_properties` <a name="put_dns_properties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.putDnsProperties"></a>

```python
def put_dns_properties(
  soa: ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa = None
) -> None
```

###### `soa`<sup>Optional</sup> <a name="soa" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.putDnsProperties.parameter.soa"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_private_dns_namespace#soa ServicediscoveryPrivateDnsNamespace#soa}.

---

##### `reset_dns_properties` <a name="reset_dns_properties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resetDnsProperties"></a>

```python
def reset_dns_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.dnsProperties">dns_properties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.dnsPropertiesInput">dns_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_properties`<sup>Required</sup> <a name="dns_properties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.dnsProperties"></a>

```python
dns_properties: ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference</a>

---

##### `dns_properties_input`<sup>Optional</sup> <a name="dns_properties_input" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.dnsPropertiesInput"></a>

```python
dns_properties_input: IResolvable | ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicediscoveryPrivateDnsNamespaceProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a>

---


### ServicediscoveryPrivateDnsNamespaceTagsList <a name="ServicediscoveryPrivateDnsNamespaceTagsList" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_private_dns_namespace

servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServicediscoveryPrivateDnsNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ServicediscoveryPrivateDnsNamespaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>]

---


### ServicediscoveryPrivateDnsNamespaceTagsOutputReference <a name="ServicediscoveryPrivateDnsNamespaceTagsOutputReference" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import servicediscovery_private_dns_namespace

servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicediscoveryPrivateDnsNamespaceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>

---



