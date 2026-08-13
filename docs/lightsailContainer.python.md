# `lightsailContainer` Submodule <a name="`lightsailContainer` Submodule" id="@cdktn/provider-awscc.lightsailContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailContainer <a name="LightsailContainer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container awscc_lightsail_container}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainer(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  power: str,
  scale: typing.Union[int, float],
  service_name: str,
  container_service_deployment: LightsailContainerContainerServiceDeployment = None,
  is_disabled: bool | IResolvable = None,
  private_registry_access: LightsailContainerPrivateRegistryAccess = None,
  public_domain_names: IResolvable | typing.List[LightsailContainerPublicDomainNames] = None,
  tags: IResolvable | typing.List[LightsailContainerTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.power">power</a></code> | <code>str</code> | The power specification for the container service. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.scale">scale</a></code> | <code>typing.Union[int, float]</code> | The scale specification for the container service. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.serviceName">service_name</a></code> | <code>str</code> | The name for the container service. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.containerServiceDeployment">container_service_deployment</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment">LightsailContainerContainerServiceDeployment</a></code> | Describes a container deployment configuration of an Amazon Lightsail container service. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.isDisabled">is_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean value to indicate whether the container service is disabled. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.privateRegistryAccess">private_registry_access</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess">LightsailContainerPrivateRegistryAccess</a></code> | A Boolean value to indicate whether the container service has access to private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.publicDomainNames">public_domain_names</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames">LightsailContainerPublicDomainNames</a>]</code> | The public domain names to use with the container service, such as example.com and www.example.com. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags">LightsailContainerTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `power`<sup>Required</sup> <a name="power" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.power"></a>

- *Type:* str

The power specification for the container service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#power LightsailContainer#power}

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.scale"></a>

- *Type:* typing.Union[int, float]

The scale specification for the container service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#scale LightsailContainer#scale}

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.serviceName"></a>

- *Type:* str

The name for the container service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#service_name LightsailContainer#service_name}

---

##### `container_service_deployment`<sup>Optional</sup> <a name="container_service_deployment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.containerServiceDeployment"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment">LightsailContainerContainerServiceDeployment</a>

Describes a container deployment configuration of an Amazon Lightsail container service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#container_service_deployment LightsailContainer#container_service_deployment}

---

##### `is_disabled`<sup>Optional</sup> <a name="is_disabled" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.isDisabled"></a>

- *Type:* bool | cdktn.IResolvable

A Boolean value to indicate whether the container service is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#is_disabled LightsailContainer#is_disabled}

---

##### `private_registry_access`<sup>Optional</sup> <a name="private_registry_access" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.privateRegistryAccess"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess">LightsailContainerPrivateRegistryAccess</a>

A Boolean value to indicate whether the container service has access to private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#private_registry_access LightsailContainer#private_registry_access}

---

##### `public_domain_names`<sup>Optional</sup> <a name="public_domain_names" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.publicDomainNames"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames">LightsailContainerPublicDomainNames</a>]

The public domain names to use with the container service, such as example.com and www.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#public_domain_names LightsailContainer#public_domain_names}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags">LightsailContainerTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#tags LightsailContainer#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putContainerServiceDeployment">put_container_service_deployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putPrivateRegistryAccess">put_private_registry_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putPublicDomainNames">put_public_domain_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetContainerServiceDeployment">reset_container_service_deployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetIsDisabled">reset_is_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetPrivateRegistryAccess">reset_private_registry_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetPublicDomainNames">reset_public_domain_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_container_service_deployment` <a name="put_container_service_deployment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putContainerServiceDeployment"></a>

```python
def put_container_service_deployment(
  containers: IResolvable | typing.List[LightsailContainerContainerServiceDeploymentContainers] = None,
  public_endpoint: LightsailContainerContainerServiceDeploymentPublicEndpoint = None
) -> None
```

###### `containers`<sup>Optional</sup> <a name="containers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putContainerServiceDeployment.parameter.containers"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers">LightsailContainerContainerServiceDeploymentContainers</a>]

An object that describes the configuration for the containers of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#containers LightsailContainer#containers}

---

###### `public_endpoint`<sup>Optional</sup> <a name="public_endpoint" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putContainerServiceDeployment.parameter.publicEndpoint"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint">LightsailContainerContainerServiceDeploymentPublicEndpoint</a>

An object that describes the endpoint of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#public_endpoint LightsailContainer#public_endpoint}

---

##### `put_private_registry_access` <a name="put_private_registry_access" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putPrivateRegistryAccess"></a>

```python
def put_private_registry_access(
  ecr_image_puller_role: LightsailContainerPrivateRegistryAccessEcrImagePullerRole = None
) -> None
```

###### `ecr_image_puller_role`<sup>Optional</sup> <a name="ecr_image_puller_role" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putPrivateRegistryAccess.parameter.ecrImagePullerRole"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole">LightsailContainerPrivateRegistryAccessEcrImagePullerRole</a>

An object to describe a request to activate or deactivate the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#ecr_image_puller_role LightsailContainer#ecr_image_puller_role}

---

##### `put_public_domain_names` <a name="put_public_domain_names" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putPublicDomainNames"></a>

```python
def put_public_domain_names(
  value: IResolvable | typing.List[LightsailContainerPublicDomainNames]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putPublicDomainNames.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames">LightsailContainerPublicDomainNames</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LightsailContainerTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags">LightsailContainerTags</a>]

---

##### `reset_container_service_deployment` <a name="reset_container_service_deployment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetContainerServiceDeployment"></a>

```python
def reset_container_service_deployment() -> None
```

##### `reset_is_disabled` <a name="reset_is_disabled" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetIsDisabled"></a>

```python
def reset_is_disabled() -> None
```

##### `reset_private_registry_access` <a name="reset_private_registry_access" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetPrivateRegistryAccess"></a>

```python
def reset_private_registry_access() -> None
```

##### `reset_public_domain_names` <a name="reset_public_domain_names" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetPublicDomainNames"></a>

```python
def reset_public_domain_names() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LightsailContainer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isConstruct"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LightsailContainer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LightsailContainer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LightsailContainer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LightsailContainer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.containerArn">container_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.containerServiceDeployment">container_service_deployment</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference">LightsailContainerContainerServiceDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.principalArn">principal_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.privateRegistryAccess">private_registry_access</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference">LightsailContainerPrivateRegistryAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.publicDomainNames">public_domain_names</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList">LightsailContainerPublicDomainNamesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList">LightsailContainerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.containerServiceDeploymentInput">container_service_deployment_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment">LightsailContainerContainerServiceDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.isDisabledInput">is_disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.powerInput">power_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.privateRegistryAccessInput">private_registry_access_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess">LightsailContainerPrivateRegistryAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.publicDomainNamesInput">public_domain_names_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames">LightsailContainerPublicDomainNames</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.scaleInput">scale_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags">LightsailContainerTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.isDisabled">is_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.power">power</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.scale">scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `container_arn`<sup>Required</sup> <a name="container_arn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.containerArn"></a>

```python
container_arn: str
```

- *Type:* str

---

##### `container_service_deployment`<sup>Required</sup> <a name="container_service_deployment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.containerServiceDeployment"></a>

```python
container_service_deployment: LightsailContainerContainerServiceDeploymentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference">LightsailContainerContainerServiceDeploymentOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_arn`<sup>Required</sup> <a name="principal_arn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.principalArn"></a>

```python
principal_arn: str
```

- *Type:* str

---

##### `private_registry_access`<sup>Required</sup> <a name="private_registry_access" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.privateRegistryAccess"></a>

```python
private_registry_access: LightsailContainerPrivateRegistryAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference">LightsailContainerPrivateRegistryAccessOutputReference</a>

---

##### `public_domain_names`<sup>Required</sup> <a name="public_domain_names" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.publicDomainNames"></a>

```python
public_domain_names: LightsailContainerPublicDomainNamesList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList">LightsailContainerPublicDomainNamesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.tags"></a>

```python
tags: LightsailContainerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList">LightsailContainerTagsList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `container_service_deployment_input`<sup>Optional</sup> <a name="container_service_deployment_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.containerServiceDeploymentInput"></a>

```python
container_service_deployment_input: IResolvable | LightsailContainerContainerServiceDeployment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment">LightsailContainerContainerServiceDeployment</a>

---

##### `is_disabled_input`<sup>Optional</sup> <a name="is_disabled_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.isDisabledInput"></a>

```python
is_disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `power_input`<sup>Optional</sup> <a name="power_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.powerInput"></a>

```python
power_input: str
```

- *Type:* str

---

##### `private_registry_access_input`<sup>Optional</sup> <a name="private_registry_access_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.privateRegistryAccessInput"></a>

```python
private_registry_access_input: IResolvable | LightsailContainerPrivateRegistryAccess
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess">LightsailContainerPrivateRegistryAccess</a>

---

##### `public_domain_names_input`<sup>Optional</sup> <a name="public_domain_names_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.publicDomainNamesInput"></a>

```python
public_domain_names_input: IResolvable | typing.List[LightsailContainerPublicDomainNames]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames">LightsailContainerPublicDomainNames</a>]

---

##### `scale_input`<sup>Optional</sup> <a name="scale_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.scaleInput"></a>

```python
scale_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LightsailContainerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags">LightsailContainerTags</a>]

---

##### `is_disabled`<sup>Required</sup> <a name="is_disabled" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.isDisabled"></a>

```python
is_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `power`<sup>Required</sup> <a name="power" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.power"></a>

```python
power: str
```

- *Type:* str

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.scale"></a>

```python
scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailContainerConfig <a name="LightsailContainerConfig" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  power: str,
  scale: typing.Union[int, float],
  service_name: str,
  container_service_deployment: LightsailContainerContainerServiceDeployment = None,
  is_disabled: bool | IResolvable = None,
  private_registry_access: LightsailContainerPrivateRegistryAccess = None,
  public_domain_names: IResolvable | typing.List[LightsailContainerPublicDomainNames] = None,
  tags: IResolvable | typing.List[LightsailContainerTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.power">power</a></code> | <code>str</code> | The power specification for the container service. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.scale">scale</a></code> | <code>typing.Union[int, float]</code> | The scale specification for the container service. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.serviceName">service_name</a></code> | <code>str</code> | The name for the container service. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.containerServiceDeployment">container_service_deployment</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment">LightsailContainerContainerServiceDeployment</a></code> | Describes a container deployment configuration of an Amazon Lightsail container service. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.isDisabled">is_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean value to indicate whether the container service is disabled. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.privateRegistryAccess">private_registry_access</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess">LightsailContainerPrivateRegistryAccess</a></code> | A Boolean value to indicate whether the container service has access to private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.publicDomainNames">public_domain_names</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames">LightsailContainerPublicDomainNames</a>]</code> | The public domain names to use with the container service, such as example.com and www.example.com. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags">LightsailContainerTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `power`<sup>Required</sup> <a name="power" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.power"></a>

```python
power: str
```

- *Type:* str

The power specification for the container service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#power LightsailContainer#power}

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.scale"></a>

```python
scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The scale specification for the container service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#scale LightsailContainer#scale}

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The name for the container service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#service_name LightsailContainer#service_name}

---

##### `container_service_deployment`<sup>Optional</sup> <a name="container_service_deployment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.containerServiceDeployment"></a>

```python
container_service_deployment: LightsailContainerContainerServiceDeployment
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment">LightsailContainerContainerServiceDeployment</a>

Describes a container deployment configuration of an Amazon Lightsail container service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#container_service_deployment LightsailContainer#container_service_deployment}

---

##### `is_disabled`<sup>Optional</sup> <a name="is_disabled" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.isDisabled"></a>

```python
is_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A Boolean value to indicate whether the container service is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#is_disabled LightsailContainer#is_disabled}

---

##### `private_registry_access`<sup>Optional</sup> <a name="private_registry_access" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.privateRegistryAccess"></a>

```python
private_registry_access: LightsailContainerPrivateRegistryAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess">LightsailContainerPrivateRegistryAccess</a>

A Boolean value to indicate whether the container service has access to private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#private_registry_access LightsailContainer#private_registry_access}

---

##### `public_domain_names`<sup>Optional</sup> <a name="public_domain_names" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.publicDomainNames"></a>

```python
public_domain_names: IResolvable | typing.List[LightsailContainerPublicDomainNames]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames">LightsailContainerPublicDomainNames</a>]

The public domain names to use with the container service, such as example.com and www.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#public_domain_names LightsailContainer#public_domain_names}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LightsailContainerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags">LightsailContainerTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#tags LightsailContainer#tags}

---

### LightsailContainerContainerServiceDeployment <a name="LightsailContainerContainerServiceDeployment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerContainerServiceDeployment(
  containers: IResolvable | typing.List[LightsailContainerContainerServiceDeploymentContainers] = None,
  public_endpoint: LightsailContainerContainerServiceDeploymentPublicEndpoint = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment.property.containers">containers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers">LightsailContainerContainerServiceDeploymentContainers</a>]</code> | An object that describes the configuration for the containers of the deployment. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment.property.publicEndpoint">public_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint">LightsailContainerContainerServiceDeploymentPublicEndpoint</a></code> | An object that describes the endpoint of the deployment. |

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment.property.containers"></a>

```python
containers: IResolvable | typing.List[LightsailContainerContainerServiceDeploymentContainers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers">LightsailContainerContainerServiceDeploymentContainers</a>]

An object that describes the configuration for the containers of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#containers LightsailContainer#containers}

---

##### `public_endpoint`<sup>Optional</sup> <a name="public_endpoint" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment.property.publicEndpoint"></a>

```python
public_endpoint: LightsailContainerContainerServiceDeploymentPublicEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint">LightsailContainerContainerServiceDeploymentPublicEndpoint</a>

An object that describes the endpoint of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#public_endpoint LightsailContainer#public_endpoint}

---

### LightsailContainerContainerServiceDeploymentContainers <a name="LightsailContainerContainerServiceDeploymentContainers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerContainerServiceDeploymentContainers(
  command: typing.List[str] = None,
  container_name: str = None,
  environment: IResolvable | typing.List[LightsailContainerContainerServiceDeploymentContainersEnvironment] = None,
  image: str = None,
  ports: IResolvable | typing.List[LightsailContainerContainerServiceDeploymentContainersPorts] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.command">command</a></code> | <code>typing.List[str]</code> | The launch command for the container. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.containerName">container_name</a></code> | <code>str</code> | The name of the container. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.environment">environment</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment">LightsailContainerContainerServiceDeploymentContainersEnvironment</a>]</code> | The environment variables of the container. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.image">image</a></code> | <code>str</code> | The name of the image used for the container. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.ports">ports</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts">LightsailContainerContainerServiceDeploymentContainersPorts</a>]</code> | The open firewall ports of the container. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

The launch command for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#command LightsailContainer#command}

---

##### `container_name`<sup>Optional</sup> <a name="container_name" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#container_name LightsailContainer#container_name}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.environment"></a>

```python
environment: IResolvable | typing.List[LightsailContainerContainerServiceDeploymentContainersEnvironment]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment">LightsailContainerContainerServiceDeploymentContainersEnvironment</a>]

The environment variables of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#environment LightsailContainer#environment}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.image"></a>

```python
image: str
```

- *Type:* str

The name of the image used for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#image LightsailContainer#image}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.ports"></a>

```python
ports: IResolvable | typing.List[LightsailContainerContainerServiceDeploymentContainersPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts">LightsailContainerContainerServiceDeploymentContainersPorts</a>]

The open firewall ports of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#ports LightsailContainer#ports}

---

### LightsailContainerContainerServiceDeploymentContainersEnvironment <a name="LightsailContainerContainerServiceDeploymentContainersEnvironment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment(
  value: str = None,
  variable: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#value LightsailContainer#value}. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment.property.variable">variable</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#variable LightsailContainer#variable}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#value LightsailContainer#value}.

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment.property.variable"></a>

```python
variable: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#variable LightsailContainer#variable}.

---

### LightsailContainerContainerServiceDeploymentContainersPorts <a name="LightsailContainerContainerServiceDeploymentContainersPorts" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts(
  port: str = None,
  protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts.property.port">port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#port LightsailContainer#port}. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#protocol LightsailContainer#protocol}. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts.property.port"></a>

```python
port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#port LightsailContainer#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#protocol LightsailContainer#protocol}.

---

### LightsailContainerContainerServiceDeploymentPublicEndpoint <a name="LightsailContainerContainerServiceDeploymentPublicEndpoint" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint(
  container_name: str = None,
  container_port: typing.Union[int, float] = None,
  health_check_config: LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.property.containerName">container_name</a></code> | <code>str</code> | The name of the container for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | The port of the container to which traffic is forwarded to. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.property.healthCheckConfig">health_check_config</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a></code> | An object that describes the health check configuration of the container. |

---

##### `container_name`<sup>Optional</sup> <a name="container_name" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

The name of the container for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#container_name LightsailContainer#container_name}

---

##### `container_port`<sup>Optional</sup> <a name="container_port" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port of the container to which traffic is forwarded to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#container_port LightsailContainer#container_port}

---

##### `health_check_config`<sup>Optional</sup> <a name="health_check_config" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.property.healthCheckConfig"></a>

```python
health_check_config: LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a>

An object that describes the health check configuration of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#health_check_config LightsailContainer#health_check_config}

---

### LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig <a name="LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig(
  healthy_threshold: typing.Union[int, float] = None,
  interval_seconds: typing.Union[int, float] = None,
  path: str = None,
  success_codes: str = None,
  timeout_seconds: typing.Union[int, float] = None,
  unhealthy_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive health checks successes required before moving the container to the Healthy state. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The approximate interval, in seconds, between health checks of an individual container. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.path">path</a></code> | <code>str</code> | The path on the container on which to perform the health check. The default value is /. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.successCodes">success_codes</a></code> | <code>str</code> | The HTTP codes to use when checking for a successful response from a container. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | The amount of time, in seconds, during which no response means a failed health check. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive health check failures required before moving the container to the Unhealthy state. |

---

##### `healthy_threshold`<sup>Optional</sup> <a name="healthy_threshold" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive health checks successes required before moving the container to the Healthy state.

The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#healthy_threshold LightsailContainer#healthy_threshold}

---

##### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The approximate interval, in seconds, between health checks of an individual container.

You can specify between 5 and 300 seconds. The default value is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#interval_seconds LightsailContainer#interval_seconds}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.path"></a>

```python
path: str
```

- *Type:* str

The path on the container on which to perform the health check. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#path LightsailContainer#path}

---

##### `success_codes`<sup>Optional</sup> <a name="success_codes" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.successCodes"></a>

```python
success_codes: str
```

- *Type:* str

The HTTP codes to use when checking for a successful response from a container.

You can specify values between 200 and 499. You can specify multiple values (for example, 200,202) or a range of values (for example, 200-299).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#success_codes LightsailContainer#success_codes}

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time, in seconds, during which no response means a failed health check.

You can specify between 2 and 60 seconds. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#timeout_seconds LightsailContainer#timeout_seconds}

---

##### `unhealthy_threshold`<sup>Optional</sup> <a name="unhealthy_threshold" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive health check failures required before moving the container to the Unhealthy state.

The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#unhealthy_threshold LightsailContainer#unhealthy_threshold}

---

### LightsailContainerPrivateRegistryAccess <a name="LightsailContainerPrivateRegistryAccess" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerPrivateRegistryAccess(
  ecr_image_puller_role: LightsailContainerPrivateRegistryAccessEcrImagePullerRole = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess.property.ecrImagePullerRole">ecr_image_puller_role</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole">LightsailContainerPrivateRegistryAccessEcrImagePullerRole</a></code> | An object to describe a request to activate or deactivate the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories. |

---

##### `ecr_image_puller_role`<sup>Optional</sup> <a name="ecr_image_puller_role" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess.property.ecrImagePullerRole"></a>

```python
ecr_image_puller_role: LightsailContainerPrivateRegistryAccessEcrImagePullerRole
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole">LightsailContainerPrivateRegistryAccessEcrImagePullerRole</a>

An object to describe a request to activate or deactivate the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#ecr_image_puller_role LightsailContainer#ecr_image_puller_role}

---

### LightsailContainerPrivateRegistryAccessEcrImagePullerRole <a name="LightsailContainerPrivateRegistryAccessEcrImagePullerRole" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole(
  is_active: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole.property.isActive">is_active</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean value that indicates whether to activate the role. |

---

##### `is_active`<sup>Optional</sup> <a name="is_active" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole.property.isActive"></a>

```python
is_active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A Boolean value that indicates whether to activate the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#is_active LightsailContainer#is_active}

---

### LightsailContainerPublicDomainNames <a name="LightsailContainerPublicDomainNames" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerPublicDomainNames(
  certificate_name: str = None,
  domain_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames.property.certificateName">certificate_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#certificate_name LightsailContainer#certificate_name}. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames.property.domainNames">domain_names</a></code> | <code>typing.List[str]</code> | An object that describes the configuration for the containers of the deployment. |

---

##### `certificate_name`<sup>Optional</sup> <a name="certificate_name" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#certificate_name LightsailContainer#certificate_name}.

---

##### `domain_names`<sup>Optional</sup> <a name="domain_names" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames.property.domainNames"></a>

```python
domain_names: typing.List[str]
```

- *Type:* typing.List[str]

An object that describes the configuration for the containers of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#domain_names LightsailContainer#domain_names}

---

### LightsailContainerTags <a name="LightsailContainerTags" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#key LightsailContainer#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#value LightsailContainer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailContainerContainerServiceDeploymentContainersEnvironmentList <a name="LightsailContainerContainerServiceDeploymentContainersEnvironmentList" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment">LightsailContainerContainerServiceDeploymentContainersEnvironment</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LightsailContainerContainerServiceDeploymentContainersEnvironment]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment">LightsailContainerContainerServiceDeploymentContainersEnvironment</a>]

---


### LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference <a name="LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resetVariable">reset_variable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_variable` <a name="reset_variable" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resetVariable"></a>

```python
def reset_variable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.variableInput">variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.variable">variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment">LightsailContainerContainerServiceDeploymentContainersEnvironment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `variable_input`<sup>Optional</sup> <a name="variable_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.variableInput"></a>

```python
variable_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.variable"></a>

```python
variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailContainerContainerServiceDeploymentContainersEnvironment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment">LightsailContainerContainerServiceDeploymentContainersEnvironment</a>

---


### LightsailContainerContainerServiceDeploymentContainersList <a name="LightsailContainerContainerServiceDeploymentContainersList" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LightsailContainerContainerServiceDeploymentContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers">LightsailContainerContainerServiceDeploymentContainers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LightsailContainerContainerServiceDeploymentContainers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers">LightsailContainerContainerServiceDeploymentContainers</a>]

---


### LightsailContainerContainerServiceDeploymentContainersOutputReference <a name="LightsailContainerContainerServiceDeploymentContainersOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.putEnvironment">put_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.putPorts">put_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetContainerName">reset_container_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetPorts">reset_ports</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_environment` <a name="put_environment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.putEnvironment"></a>

```python
def put_environment(
  value: IResolvable | typing.List[LightsailContainerContainerServiceDeploymentContainersEnvironment]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.putEnvironment.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment">LightsailContainerContainerServiceDeploymentContainersEnvironment</a>]

---

##### `put_ports` <a name="put_ports" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.putPorts"></a>

```python
def put_ports(
  value: IResolvable | typing.List[LightsailContainerContainerServiceDeploymentContainersPorts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.putPorts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts">LightsailContainerContainerServiceDeploymentContainersPorts</a>]

---

##### `reset_command` <a name="reset_command" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_container_name` <a name="reset_container_name" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetContainerName"></a>

```python
def reset_container_name() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_ports` <a name="reset_ports" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList">LightsailContainerContainerServiceDeploymentContainersEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList">LightsailContainerContainerServiceDeploymentContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.environmentInput">environment_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment">LightsailContainerContainerServiceDeploymentContainersEnvironment</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.portsInput">ports_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts">LightsailContainerContainerServiceDeploymentContainersPorts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers">LightsailContainerContainerServiceDeploymentContainers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.environment"></a>

```python
environment: LightsailContainerContainerServiceDeploymentContainersEnvironmentList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList">LightsailContainerContainerServiceDeploymentContainersEnvironmentList</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.ports"></a>

```python
ports: LightsailContainerContainerServiceDeploymentContainersPortsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList">LightsailContainerContainerServiceDeploymentContainersPortsList</a>

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.environmentInput"></a>

```python
environment_input: IResolvable | typing.List[LightsailContainerContainerServiceDeploymentContainersEnvironment]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment">LightsailContainerContainerServiceDeploymentContainersEnvironment</a>]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.portsInput"></a>

```python
ports_input: IResolvable | typing.List[LightsailContainerContainerServiceDeploymentContainersPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts">LightsailContainerContainerServiceDeploymentContainersPorts</a>]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailContainerContainerServiceDeploymentContainers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers">LightsailContainerContainerServiceDeploymentContainers</a>

---


### LightsailContainerContainerServiceDeploymentContainersPortsList <a name="LightsailContainerContainerServiceDeploymentContainersPortsList" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LightsailContainerContainerServiceDeploymentContainersPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts">LightsailContainerContainerServiceDeploymentContainersPorts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LightsailContainerContainerServiceDeploymentContainersPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts">LightsailContainerContainerServiceDeploymentContainersPorts</a>]

---


### LightsailContainerContainerServiceDeploymentContainersPortsOutputReference <a name="LightsailContainerContainerServiceDeploymentContainersPortsOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts">LightsailContainerContainerServiceDeploymentContainersPorts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailContainerContainerServiceDeploymentContainersPorts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts">LightsailContainerContainerServiceDeploymentContainersPorts</a>

---


### LightsailContainerContainerServiceDeploymentOutputReference <a name="LightsailContainerContainerServiceDeploymentOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.putContainers">put_containers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.putPublicEndpoint">put_public_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resetContainers">reset_containers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resetPublicEndpoint">reset_public_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_containers` <a name="put_containers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.putContainers"></a>

```python
def put_containers(
  value: IResolvable | typing.List[LightsailContainerContainerServiceDeploymentContainers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.putContainers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers">LightsailContainerContainerServiceDeploymentContainers</a>]

---

##### `put_public_endpoint` <a name="put_public_endpoint" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.putPublicEndpoint"></a>

```python
def put_public_endpoint(
  container_name: str = None,
  container_port: typing.Union[int, float] = None,
  health_check_config: LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig = None
) -> None
```

###### `container_name`<sup>Optional</sup> <a name="container_name" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.putPublicEndpoint.parameter.containerName"></a>

- *Type:* str

The name of the container for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#container_name LightsailContainer#container_name}

---

###### `container_port`<sup>Optional</sup> <a name="container_port" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.putPublicEndpoint.parameter.containerPort"></a>

- *Type:* typing.Union[int, float]

The port of the container to which traffic is forwarded to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#container_port LightsailContainer#container_port}

---

###### `health_check_config`<sup>Optional</sup> <a name="health_check_config" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.putPublicEndpoint.parameter.healthCheckConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a>

An object that describes the health check configuration of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#health_check_config LightsailContainer#health_check_config}

---

##### `reset_containers` <a name="reset_containers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resetContainers"></a>

```python
def reset_containers() -> None
```

##### `reset_public_endpoint` <a name="reset_public_endpoint" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resetPublicEndpoint"></a>

```python
def reset_public_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList">LightsailContainerContainerServiceDeploymentContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.publicEndpoint">public_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference">LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.containersInput">containers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers">LightsailContainerContainerServiceDeploymentContainers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.publicEndpointInput">public_endpoint_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint">LightsailContainerContainerServiceDeploymentPublicEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment">LightsailContainerContainerServiceDeployment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.containers"></a>

```python
containers: LightsailContainerContainerServiceDeploymentContainersList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList">LightsailContainerContainerServiceDeploymentContainersList</a>

---

##### `public_endpoint`<sup>Required</sup> <a name="public_endpoint" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.publicEndpoint"></a>

```python
public_endpoint: LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference">LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference</a>

---

##### `containers_input`<sup>Optional</sup> <a name="containers_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.containersInput"></a>

```python
containers_input: IResolvable | typing.List[LightsailContainerContainerServiceDeploymentContainers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers">LightsailContainerContainerServiceDeploymentContainers</a>]

---

##### `public_endpoint_input`<sup>Optional</sup> <a name="public_endpoint_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.publicEndpointInput"></a>

```python
public_endpoint_input: IResolvable | LightsailContainerContainerServiceDeploymentPublicEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint">LightsailContainerContainerServiceDeploymentPublicEndpoint</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailContainerContainerServiceDeployment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment">LightsailContainerContainerServiceDeployment</a>

---


### LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference <a name="LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetHealthyThreshold">reset_healthy_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetIntervalSeconds">reset_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetSuccessCodes">reset_success_codes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetUnhealthyThreshold">reset_unhealthy_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_healthy_threshold` <a name="reset_healthy_threshold" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetHealthyThreshold"></a>

```python
def reset_healthy_threshold() -> None
```

##### `reset_interval_seconds` <a name="reset_interval_seconds" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetIntervalSeconds"></a>

```python
def reset_interval_seconds() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_success_codes` <a name="reset_success_codes" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetSuccessCodes"></a>

```python
def reset_success_codes() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```

##### `reset_unhealthy_threshold` <a name="reset_unhealthy_threshold" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetUnhealthyThreshold"></a>

```python
def reset_unhealthy_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.healthyThresholdInput">healthy_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.intervalSecondsInput">interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.successCodesInput">success_codes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.unhealthyThresholdInput">unhealthy_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.successCodes">success_codes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `healthy_threshold_input`<sup>Optional</sup> <a name="healthy_threshold_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.healthyThresholdInput"></a>

```python
healthy_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_seconds_input`<sup>Optional</sup> <a name="interval_seconds_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.intervalSecondsInput"></a>

```python
interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `success_codes_input`<sup>Optional</sup> <a name="success_codes_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.successCodesInput"></a>

```python
success_codes_input: str
```

- *Type:* str

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_threshold_input`<sup>Optional</sup> <a name="unhealthy_threshold_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.unhealthyThresholdInput"></a>

```python
unhealthy_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `healthy_threshold`<sup>Required</sup> <a name="healthy_threshold" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `success_codes`<sup>Required</sup> <a name="success_codes" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.successCodes"></a>

```python
success_codes: str
```

- *Type:* str

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_threshold`<sup>Required</sup> <a name="unhealthy_threshold" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a>

---


### LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference <a name="LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.putHealthCheckConfig">put_health_check_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resetContainerName">reset_container_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resetContainerPort">reset_container_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resetHealthCheckConfig">reset_health_check_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_health_check_config` <a name="put_health_check_config" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.putHealthCheckConfig"></a>

```python
def put_health_check_config(
  healthy_threshold: typing.Union[int, float] = None,
  interval_seconds: typing.Union[int, float] = None,
  path: str = None,
  success_codes: str = None,
  timeout_seconds: typing.Union[int, float] = None,
  unhealthy_threshold: typing.Union[int, float] = None
) -> None
```

###### `healthy_threshold`<sup>Optional</sup> <a name="healthy_threshold" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.putHealthCheckConfig.parameter.healthyThreshold"></a>

- *Type:* typing.Union[int, float]

The number of consecutive health checks successes required before moving the container to the Healthy state.

The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#healthy_threshold LightsailContainer#healthy_threshold}

---

###### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.putHealthCheckConfig.parameter.intervalSeconds"></a>

- *Type:* typing.Union[int, float]

The approximate interval, in seconds, between health checks of an individual container.

You can specify between 5 and 300 seconds. The default value is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#interval_seconds LightsailContainer#interval_seconds}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.putHealthCheckConfig.parameter.path"></a>

- *Type:* str

The path on the container on which to perform the health check. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#path LightsailContainer#path}

---

###### `success_codes`<sup>Optional</sup> <a name="success_codes" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.putHealthCheckConfig.parameter.successCodes"></a>

- *Type:* str

The HTTP codes to use when checking for a successful response from a container.

You can specify values between 200 and 499. You can specify multiple values (for example, 200,202) or a range of values (for example, 200-299).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#success_codes LightsailContainer#success_codes}

---

###### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.putHealthCheckConfig.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

The amount of time, in seconds, during which no response means a failed health check.

You can specify between 2 and 60 seconds. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#timeout_seconds LightsailContainer#timeout_seconds}

---

###### `unhealthy_threshold`<sup>Optional</sup> <a name="unhealthy_threshold" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.putHealthCheckConfig.parameter.unhealthyThreshold"></a>

- *Type:* typing.Union[int, float]

The number of consecutive health check failures required before moving the container to the Unhealthy state.

The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#unhealthy_threshold LightsailContainer#unhealthy_threshold}

---

##### `reset_container_name` <a name="reset_container_name" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resetContainerName"></a>

```python
def reset_container_name() -> None
```

##### `reset_container_port` <a name="reset_container_port" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resetContainerPort"></a>

```python
def reset_container_port() -> None
```

##### `reset_health_check_config` <a name="reset_health_check_config" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resetHealthCheckConfig"></a>

```python
def reset_health_check_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.healthCheckConfig">health_check_config</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerPortInput">container_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.healthCheckConfigInput">health_check_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint">LightsailContainerContainerServiceDeploymentPublicEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_check_config`<sup>Required</sup> <a name="health_check_config" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.healthCheckConfig"></a>

```python
health_check_config: LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference</a>

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `container_port_input`<sup>Optional</sup> <a name="container_port_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerPortInput"></a>

```python
container_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_config_input`<sup>Optional</sup> <a name="health_check_config_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.healthCheckConfigInput"></a>

```python
health_check_config_input: IResolvable | LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a>

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `container_port`<sup>Required</sup> <a name="container_port" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailContainerContainerServiceDeploymentPublicEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint">LightsailContainerContainerServiceDeploymentPublicEndpoint</a>

---


### LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference <a name="LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resetIsActive">reset_is_active</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_active` <a name="reset_is_active" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resetIsActive"></a>

```python
def reset_is_active() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.principalArn">principal_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActiveInput">is_active_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActive">is_active</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole">LightsailContainerPrivateRegistryAccessEcrImagePullerRole</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_arn`<sup>Required</sup> <a name="principal_arn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.principalArn"></a>

```python
principal_arn: str
```

- *Type:* str

---

##### `is_active_input`<sup>Optional</sup> <a name="is_active_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActiveInput"></a>

```python
is_active_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActive"></a>

```python
is_active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailContainerPrivateRegistryAccessEcrImagePullerRole
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole">LightsailContainerPrivateRegistryAccessEcrImagePullerRole</a>

---


### LightsailContainerPrivateRegistryAccessOutputReference <a name="LightsailContainerPrivateRegistryAccessOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.putEcrImagePullerRole">put_ecr_image_puller_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.resetEcrImagePullerRole">reset_ecr_image_puller_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ecr_image_puller_role` <a name="put_ecr_image_puller_role" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.putEcrImagePullerRole"></a>

```python
def put_ecr_image_puller_role(
  is_active: bool | IResolvable = None
) -> None
```

###### `is_active`<sup>Optional</sup> <a name="is_active" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.putEcrImagePullerRole.parameter.isActive"></a>

- *Type:* bool | cdktn.IResolvable

A Boolean value that indicates whether to activate the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_container#is_active LightsailContainer#is_active}

---

##### `reset_ecr_image_puller_role` <a name="reset_ecr_image_puller_role" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.resetEcrImagePullerRole"></a>

```python
def reset_ecr_image_puller_role() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.ecrImagePullerRole">ecr_image_puller_role</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference">LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.ecrImagePullerRoleInput">ecr_image_puller_role_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole">LightsailContainerPrivateRegistryAccessEcrImagePullerRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess">LightsailContainerPrivateRegistryAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ecr_image_puller_role`<sup>Required</sup> <a name="ecr_image_puller_role" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.ecrImagePullerRole"></a>

```python
ecr_image_puller_role: LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference">LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference</a>

---

##### `ecr_image_puller_role_input`<sup>Optional</sup> <a name="ecr_image_puller_role_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.ecrImagePullerRoleInput"></a>

```python
ecr_image_puller_role_input: IResolvable | LightsailContainerPrivateRegistryAccessEcrImagePullerRole
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole">LightsailContainerPrivateRegistryAccessEcrImagePullerRole</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailContainerPrivateRegistryAccess
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess">LightsailContainerPrivateRegistryAccess</a>

---


### LightsailContainerPublicDomainNamesList <a name="LightsailContainerPublicDomainNamesList" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerPublicDomainNamesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LightsailContainerPublicDomainNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames">LightsailContainerPublicDomainNames</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LightsailContainerPublicDomainNames]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames">LightsailContainerPublicDomainNames</a>]

---


### LightsailContainerPublicDomainNamesOutputReference <a name="LightsailContainerPublicDomainNamesOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerPublicDomainNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resetCertificateName">reset_certificate_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resetDomainNames">reset_domain_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_name` <a name="reset_certificate_name" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resetCertificateName"></a>

```python
def reset_certificate_name() -> None
```

##### `reset_domain_names` <a name="reset_domain_names" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resetDomainNames"></a>

```python
def reset_domain_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.certificateNameInput">certificate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.domainNamesInput">domain_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.certificateName">certificate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.domainNames">domain_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames">LightsailContainerPublicDomainNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_name_input`<sup>Optional</sup> <a name="certificate_name_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.certificateNameInput"></a>

```python
certificate_name_input: str
```

- *Type:* str

---

##### `domain_names_input`<sup>Optional</sup> <a name="domain_names_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.domainNamesInput"></a>

```python
domain_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

---

##### `domain_names`<sup>Required</sup> <a name="domain_names" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.domainNames"></a>

```python
domain_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailContainerPublicDomainNames
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames">LightsailContainerPublicDomainNames</a>

---


### LightsailContainerTagsList <a name="LightsailContainerTagsList" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LightsailContainerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags">LightsailContainerTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LightsailContainerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags">LightsailContainerTags</a>]

---


### LightsailContainerTagsOutputReference <a name="LightsailContainerTagsOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_container

lightsailContainer.LightsailContainerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags">LightsailContainerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailContainerTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags">LightsailContainerTags</a>

---



