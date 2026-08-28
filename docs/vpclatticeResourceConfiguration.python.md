# `vpclatticeResourceConfiguration` Submodule <a name="`vpclatticeResourceConfiguration` Submodule" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeResourceConfiguration <a name="VpclatticeResourceConfiguration" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration awscc_vpclattice_resource_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_resource_configuration

vpclatticeResourceConfiguration.VpclatticeResourceConfiguration(
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
  resource_configuration_type: str,
  allow_association_to_sharable_service_network: bool | IResolvable = None,
  custom_domain_name: str = None,
  domain_verification_id: str = None,
  group_domain: str = None,
  port_ranges: typing.List[str] = None,
  protocol_type: str = None,
  resource_configuration_auth_type: str = None,
  resource_configuration_definition: VpclatticeResourceConfigurationResourceConfigurationDefinition = None,
  resource_configuration_group_id: str = None,
  resource_gateway_id: str = None,
  tags: IResolvable | typing.List[VpclatticeResourceConfigurationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#name VpclatticeResourceConfiguration#name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.resourceConfigurationType">resource_configuration_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_type VpclatticeResourceConfiguration#resource_configuration_type}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.allowAssociationToSharableServiceNetwork">allow_association_to_sharable_service_network</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#allow_association_to_sharable_service_network VpclatticeResourceConfiguration#allow_association_to_sharable_service_network}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.customDomainName">custom_domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#custom_domain_name VpclatticeResourceConfiguration#custom_domain_name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.domainVerificationId">domain_verification_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#domain_verification_id VpclatticeResourceConfiguration#domain_verification_id}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.groupDomain">group_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#group_domain VpclatticeResourceConfiguration#group_domain}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.portRanges">port_ranges</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#port_ranges VpclatticeResourceConfiguration#port_ranges}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.protocolType">protocol_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#protocol_type VpclatticeResourceConfiguration#protocol_type}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.resourceConfigurationAuthType">resource_configuration_auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_auth_type VpclatticeResourceConfiguration#resource_configuration_auth_type}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.resourceConfigurationDefinition">resource_configuration_definition</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_definition VpclatticeResourceConfiguration#resource_configuration_definition}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.resourceConfigurationGroupId">resource_configuration_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_group_id VpclatticeResourceConfiguration#resource_configuration_group_id}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.resourceGatewayId">resource_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_gateway_id VpclatticeResourceConfiguration#resource_gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#tags VpclatticeResourceConfiguration#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#name VpclatticeResourceConfiguration#name}.

---

##### `resource_configuration_type`<sup>Required</sup> <a name="resource_configuration_type" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.resourceConfigurationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_type VpclatticeResourceConfiguration#resource_configuration_type}.

---

##### `allow_association_to_sharable_service_network`<sup>Optional</sup> <a name="allow_association_to_sharable_service_network" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.allowAssociationToSharableServiceNetwork"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#allow_association_to_sharable_service_network VpclatticeResourceConfiguration#allow_association_to_sharable_service_network}.

---

##### `custom_domain_name`<sup>Optional</sup> <a name="custom_domain_name" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.customDomainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#custom_domain_name VpclatticeResourceConfiguration#custom_domain_name}.

---

##### `domain_verification_id`<sup>Optional</sup> <a name="domain_verification_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.domainVerificationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#domain_verification_id VpclatticeResourceConfiguration#domain_verification_id}.

---

##### `group_domain`<sup>Optional</sup> <a name="group_domain" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.groupDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#group_domain VpclatticeResourceConfiguration#group_domain}.

---

##### `port_ranges`<sup>Optional</sup> <a name="port_ranges" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.portRanges"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#port_ranges VpclatticeResourceConfiguration#port_ranges}.

---

##### `protocol_type`<sup>Optional</sup> <a name="protocol_type" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.protocolType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#protocol_type VpclatticeResourceConfiguration#protocol_type}.

---

##### `resource_configuration_auth_type`<sup>Optional</sup> <a name="resource_configuration_auth_type" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.resourceConfigurationAuthType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_auth_type VpclatticeResourceConfiguration#resource_configuration_auth_type}.

---

##### `resource_configuration_definition`<sup>Optional</sup> <a name="resource_configuration_definition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.resourceConfigurationDefinition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_definition VpclatticeResourceConfiguration#resource_configuration_definition}.

---

##### `resource_configuration_group_id`<sup>Optional</sup> <a name="resource_configuration_group_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.resourceConfigurationGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_group_id VpclatticeResourceConfiguration#resource_configuration_group_id}.

---

##### `resource_gateway_id`<sup>Optional</sup> <a name="resource_gateway_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.resourceGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_gateway_id VpclatticeResourceConfiguration#resource_gateway_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#tags VpclatticeResourceConfiguration#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putResourceConfigurationDefinition">put_resource_configuration_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetAllowAssociationToSharableServiceNetwork">reset_allow_association_to_sharable_service_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetCustomDomainName">reset_custom_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetDomainVerificationId">reset_domain_verification_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetGroupDomain">reset_group_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetPortRanges">reset_port_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetProtocolType">reset_protocol_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationAuthType">reset_resource_configuration_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationDefinition">reset_resource_configuration_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationGroupId">reset_resource_configuration_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceGatewayId">reset_resource_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_resource_configuration_definition` <a name="put_resource_configuration_definition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putResourceConfigurationDefinition"></a>

```python
def put_resource_configuration_definition(
  arn_resource: str = None,
  dns_resource: VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource = None,
  ip_resource: str = None
) -> None
```

###### `arn_resource`<sup>Optional</sup> <a name="arn_resource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putResourceConfigurationDefinition.parameter.arnResource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#arn_resource VpclatticeResourceConfiguration#arn_resource}.

---

###### `dns_resource`<sup>Optional</sup> <a name="dns_resource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putResourceConfigurationDefinition.parameter.dnsResource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#dns_resource VpclatticeResourceConfiguration#dns_resource}.

---

###### `ip_resource`<sup>Optional</sup> <a name="ip_resource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putResourceConfigurationDefinition.parameter.ipResource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#ip_resource VpclatticeResourceConfiguration#ip_resource}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[VpclatticeResourceConfigurationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>]

---

##### `reset_allow_association_to_sharable_service_network` <a name="reset_allow_association_to_sharable_service_network" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetAllowAssociationToSharableServiceNetwork"></a>

```python
def reset_allow_association_to_sharable_service_network() -> None
```

##### `reset_custom_domain_name` <a name="reset_custom_domain_name" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetCustomDomainName"></a>

```python
def reset_custom_domain_name() -> None
```

##### `reset_domain_verification_id` <a name="reset_domain_verification_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetDomainVerificationId"></a>

```python
def reset_domain_verification_id() -> None
```

##### `reset_group_domain` <a name="reset_group_domain" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetGroupDomain"></a>

```python
def reset_group_domain() -> None
```

##### `reset_port_ranges` <a name="reset_port_ranges" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetPortRanges"></a>

```python
def reset_port_ranges() -> None
```

##### `reset_protocol_type` <a name="reset_protocol_type" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetProtocolType"></a>

```python
def reset_protocol_type() -> None
```

##### `reset_resource_configuration_auth_type` <a name="reset_resource_configuration_auth_type" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationAuthType"></a>

```python
def reset_resource_configuration_auth_type() -> None
```

##### `reset_resource_configuration_definition` <a name="reset_resource_configuration_definition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationDefinition"></a>

```python
def reset_resource_configuration_definition() -> None
```

##### `reset_resource_configuration_group_id` <a name="reset_resource_configuration_group_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationGroupId"></a>

```python
def reset_resource_configuration_group_id() -> None
```

##### `reset_resource_gateway_id` <a name="reset_resource_gateway_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceGatewayId"></a>

```python
def reset_resource_gateway_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a VpclatticeResourceConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import vpclattice_resource_configuration

vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import vpclattice_resource_configuration

vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import vpclattice_resource_configuration

vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import vpclattice_resource_configuration

vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a VpclatticeResourceConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VpclatticeResourceConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VpclatticeResourceConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VpclatticeResourceConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationDefinition">resource_configuration_definition</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference">VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationId">resource_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList">VpclatticeResourceConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.allowAssociationToSharableServiceNetworkInput">allow_association_to_sharable_service_network_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.customDomainNameInput">custom_domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.domainVerificationIdInput">domain_verification_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.groupDomainInput">group_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.portRangesInput">port_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.protocolTypeInput">protocol_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationAuthTypeInput">resource_configuration_auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationDefinitionInput">resource_configuration_definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationGroupIdInput">resource_configuration_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationTypeInput">resource_configuration_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceGatewayIdInput">resource_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.allowAssociationToSharableServiceNetwork">allow_association_to_sharable_service_network</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.customDomainName">custom_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.domainVerificationId">domain_verification_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.groupDomain">group_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.portRanges">port_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.protocolType">protocol_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationAuthType">resource_configuration_auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationGroupId">resource_configuration_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationType">resource_configuration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceGatewayId">resource_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_configuration_definition`<sup>Required</sup> <a name="resource_configuration_definition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationDefinition"></a>

```python
resource_configuration_definition: VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference">VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference</a>

---

##### `resource_configuration_id`<sup>Required</sup> <a name="resource_configuration_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationId"></a>

```python
resource_configuration_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tags"></a>

```python
tags: VpclatticeResourceConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList">VpclatticeResourceConfigurationTagsList</a>

---

##### `allow_association_to_sharable_service_network_input`<sup>Optional</sup> <a name="allow_association_to_sharable_service_network_input" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.allowAssociationToSharableServiceNetworkInput"></a>

```python
allow_association_to_sharable_service_network_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `custom_domain_name_input`<sup>Optional</sup> <a name="custom_domain_name_input" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.customDomainNameInput"></a>

```python
custom_domain_name_input: str
```

- *Type:* str

---

##### `domain_verification_id_input`<sup>Optional</sup> <a name="domain_verification_id_input" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.domainVerificationIdInput"></a>

```python
domain_verification_id_input: str
```

- *Type:* str

---

##### `group_domain_input`<sup>Optional</sup> <a name="group_domain_input" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.groupDomainInput"></a>

```python
group_domain_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_ranges_input`<sup>Optional</sup> <a name="port_ranges_input" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.portRangesInput"></a>

```python
port_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol_type_input`<sup>Optional</sup> <a name="protocol_type_input" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.protocolTypeInput"></a>

```python
protocol_type_input: str
```

- *Type:* str

---

##### `resource_configuration_auth_type_input`<sup>Optional</sup> <a name="resource_configuration_auth_type_input" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationAuthTypeInput"></a>

```python
resource_configuration_auth_type_input: str
```

- *Type:* str

---

##### `resource_configuration_definition_input`<sup>Optional</sup> <a name="resource_configuration_definition_input" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationDefinitionInput"></a>

```python
resource_configuration_definition_input: IResolvable | VpclatticeResourceConfigurationResourceConfigurationDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a>

---

##### `resource_configuration_group_id_input`<sup>Optional</sup> <a name="resource_configuration_group_id_input" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationGroupIdInput"></a>

```python
resource_configuration_group_id_input: str
```

- *Type:* str

---

##### `resource_configuration_type_input`<sup>Optional</sup> <a name="resource_configuration_type_input" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationTypeInput"></a>

```python
resource_configuration_type_input: str
```

- *Type:* str

---

##### `resource_gateway_id_input`<sup>Optional</sup> <a name="resource_gateway_id_input" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceGatewayIdInput"></a>

```python
resource_gateway_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[VpclatticeResourceConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>]

---

##### `allow_association_to_sharable_service_network`<sup>Required</sup> <a name="allow_association_to_sharable_service_network" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.allowAssociationToSharableServiceNetwork"></a>

```python
allow_association_to_sharable_service_network: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `custom_domain_name`<sup>Required</sup> <a name="custom_domain_name" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.customDomainName"></a>

```python
custom_domain_name: str
```

- *Type:* str

---

##### `domain_verification_id`<sup>Required</sup> <a name="domain_verification_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.domainVerificationId"></a>

```python
domain_verification_id: str
```

- *Type:* str

---

##### `group_domain`<sup>Required</sup> <a name="group_domain" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.groupDomain"></a>

```python
group_domain: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port_ranges`<sup>Required</sup> <a name="port_ranges" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.portRanges"></a>

```python
port_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol_type`<sup>Required</sup> <a name="protocol_type" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.protocolType"></a>

```python
protocol_type: str
```

- *Type:* str

---

##### `resource_configuration_auth_type`<sup>Required</sup> <a name="resource_configuration_auth_type" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationAuthType"></a>

```python
resource_configuration_auth_type: str
```

- *Type:* str

---

##### `resource_configuration_group_id`<sup>Required</sup> <a name="resource_configuration_group_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationGroupId"></a>

```python
resource_configuration_group_id: str
```

- *Type:* str

---

##### `resource_configuration_type`<sup>Required</sup> <a name="resource_configuration_type" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationType"></a>

```python
resource_configuration_type: str
```

- *Type:* str

---

##### `resource_gateway_id`<sup>Required</sup> <a name="resource_gateway_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceGatewayId"></a>

```python
resource_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeResourceConfigurationConfig <a name="VpclatticeResourceConfigurationConfig" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_resource_configuration

vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  resource_configuration_type: str,
  allow_association_to_sharable_service_network: bool | IResolvable = None,
  custom_domain_name: str = None,
  domain_verification_id: str = None,
  group_domain: str = None,
  port_ranges: typing.List[str] = None,
  protocol_type: str = None,
  resource_configuration_auth_type: str = None,
  resource_configuration_definition: VpclatticeResourceConfigurationResourceConfigurationDefinition = None,
  resource_configuration_group_id: str = None,
  resource_gateway_id: str = None,
  tags: IResolvable | typing.List[VpclatticeResourceConfigurationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#name VpclatticeResourceConfiguration#name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationType">resource_configuration_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_type VpclatticeResourceConfiguration#resource_configuration_type}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.allowAssociationToSharableServiceNetwork">allow_association_to_sharable_service_network</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#allow_association_to_sharable_service_network VpclatticeResourceConfiguration#allow_association_to_sharable_service_network}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.customDomainName">custom_domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#custom_domain_name VpclatticeResourceConfiguration#custom_domain_name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.domainVerificationId">domain_verification_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#domain_verification_id VpclatticeResourceConfiguration#domain_verification_id}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.groupDomain">group_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#group_domain VpclatticeResourceConfiguration#group_domain}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.portRanges">port_ranges</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#port_ranges VpclatticeResourceConfiguration#port_ranges}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.protocolType">protocol_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#protocol_type VpclatticeResourceConfiguration#protocol_type}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationAuthType">resource_configuration_auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_auth_type VpclatticeResourceConfiguration#resource_configuration_auth_type}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationDefinition">resource_configuration_definition</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_definition VpclatticeResourceConfiguration#resource_configuration_definition}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationGroupId">resource_configuration_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_group_id VpclatticeResourceConfiguration#resource_configuration_group_id}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceGatewayId">resource_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_gateway_id VpclatticeResourceConfiguration#resource_gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#tags VpclatticeResourceConfiguration#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#name VpclatticeResourceConfiguration#name}.

---

##### `resource_configuration_type`<sup>Required</sup> <a name="resource_configuration_type" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationType"></a>

```python
resource_configuration_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_type VpclatticeResourceConfiguration#resource_configuration_type}.

---

##### `allow_association_to_sharable_service_network`<sup>Optional</sup> <a name="allow_association_to_sharable_service_network" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.allowAssociationToSharableServiceNetwork"></a>

```python
allow_association_to_sharable_service_network: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#allow_association_to_sharable_service_network VpclatticeResourceConfiguration#allow_association_to_sharable_service_network}.

---

##### `custom_domain_name`<sup>Optional</sup> <a name="custom_domain_name" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.customDomainName"></a>

```python
custom_domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#custom_domain_name VpclatticeResourceConfiguration#custom_domain_name}.

---

##### `domain_verification_id`<sup>Optional</sup> <a name="domain_verification_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.domainVerificationId"></a>

```python
domain_verification_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#domain_verification_id VpclatticeResourceConfiguration#domain_verification_id}.

---

##### `group_domain`<sup>Optional</sup> <a name="group_domain" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.groupDomain"></a>

```python
group_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#group_domain VpclatticeResourceConfiguration#group_domain}.

---

##### `port_ranges`<sup>Optional</sup> <a name="port_ranges" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.portRanges"></a>

```python
port_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#port_ranges VpclatticeResourceConfiguration#port_ranges}.

---

##### `protocol_type`<sup>Optional</sup> <a name="protocol_type" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.protocolType"></a>

```python
protocol_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#protocol_type VpclatticeResourceConfiguration#protocol_type}.

---

##### `resource_configuration_auth_type`<sup>Optional</sup> <a name="resource_configuration_auth_type" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationAuthType"></a>

```python
resource_configuration_auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_auth_type VpclatticeResourceConfiguration#resource_configuration_auth_type}.

---

##### `resource_configuration_definition`<sup>Optional</sup> <a name="resource_configuration_definition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationDefinition"></a>

```python
resource_configuration_definition: VpclatticeResourceConfigurationResourceConfigurationDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_definition VpclatticeResourceConfiguration#resource_configuration_definition}.

---

##### `resource_configuration_group_id`<sup>Optional</sup> <a name="resource_configuration_group_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationGroupId"></a>

```python
resource_configuration_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_configuration_group_id VpclatticeResourceConfiguration#resource_configuration_group_id}.

---

##### `resource_gateway_id`<sup>Optional</sup> <a name="resource_gateway_id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceGatewayId"></a>

```python
resource_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#resource_gateway_id VpclatticeResourceConfiguration#resource_gateway_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[VpclatticeResourceConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#tags VpclatticeResourceConfiguration#tags}.

---

### VpclatticeResourceConfigurationResourceConfigurationDefinition <a name="VpclatticeResourceConfigurationResourceConfigurationDefinition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_resource_configuration

vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition(
  arn_resource: str = None,
  dns_resource: VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource = None,
  ip_resource: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.arnResource">arn_resource</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#arn_resource VpclatticeResourceConfiguration#arn_resource}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.dnsResource">dns_resource</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#dns_resource VpclatticeResourceConfiguration#dns_resource}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.ipResource">ip_resource</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#ip_resource VpclatticeResourceConfiguration#ip_resource}. |

---

##### `arn_resource`<sup>Optional</sup> <a name="arn_resource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.arnResource"></a>

```python
arn_resource: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#arn_resource VpclatticeResourceConfiguration#arn_resource}.

---

##### `dns_resource`<sup>Optional</sup> <a name="dns_resource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.dnsResource"></a>

```python
dns_resource: VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#dns_resource VpclatticeResourceConfiguration#dns_resource}.

---

##### `ip_resource`<sup>Optional</sup> <a name="ip_resource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.ipResource"></a>

```python
ip_resource: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#ip_resource VpclatticeResourceConfiguration#ip_resource}.

---

### VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource <a name="VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_resource_configuration

vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource(
  domain_name: str = None,
  ip_address_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#domain_name VpclatticeResourceConfiguration#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#ip_address_type VpclatticeResourceConfiguration#ip_address_type}. |

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#domain_name VpclatticeResourceConfiguration#domain_name}.

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#ip_address_type VpclatticeResourceConfiguration#ip_address_type}.

---

### VpclatticeResourceConfigurationTags <a name="VpclatticeResourceConfigurationTags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_resource_configuration

vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#key VpclatticeResourceConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#value VpclatticeResourceConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#key VpclatticeResourceConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#value VpclatticeResourceConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference <a name="VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_resource_configuration

vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resetDomainName">reset_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_domain_name` <a name="reset_domain_name" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resetDomainName"></a>

```python
def reset_domain_name() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a>

---


### VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference <a name="VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_resource_configuration

vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.putDnsResource">put_dns_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetArnResource">reset_arn_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetDnsResource">reset_dns_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetIpResource">reset_ip_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dns_resource` <a name="put_dns_resource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.putDnsResource"></a>

```python
def put_dns_resource(
  domain_name: str = None,
  ip_address_type: str = None
) -> None
```

###### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.putDnsResource.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#domain_name VpclatticeResourceConfiguration#domain_name}.

---

###### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.putDnsResource.parameter.ipAddressType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_resource_configuration#ip_address_type VpclatticeResourceConfiguration#ip_address_type}.

---

##### `reset_arn_resource` <a name="reset_arn_resource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetArnResource"></a>

```python
def reset_arn_resource() -> None
```

##### `reset_dns_resource` <a name="reset_dns_resource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetDnsResource"></a>

```python
def reset_dns_resource() -> None
```

##### `reset_ip_resource` <a name="reset_ip_resource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetIpResource"></a>

```python
def reset_ip_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.dnsResource">dns_resource</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.arnResourceInput">arn_resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.dnsResourceInput">dns_resource_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.ipResourceInput">ip_resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.arnResource">arn_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.ipResource">ip_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_resource`<sup>Required</sup> <a name="dns_resource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.dnsResource"></a>

```python
dns_resource: VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference</a>

---

##### `arn_resource_input`<sup>Optional</sup> <a name="arn_resource_input" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.arnResourceInput"></a>

```python
arn_resource_input: str
```

- *Type:* str

---

##### `dns_resource_input`<sup>Optional</sup> <a name="dns_resource_input" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.dnsResourceInput"></a>

```python
dns_resource_input: IResolvable | VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a>

---

##### `ip_resource_input`<sup>Optional</sup> <a name="ip_resource_input" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.ipResourceInput"></a>

```python
ip_resource_input: str
```

- *Type:* str

---

##### `arn_resource`<sup>Required</sup> <a name="arn_resource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.arnResource"></a>

```python
arn_resource: str
```

- *Type:* str

---

##### `ip_resource`<sup>Required</sup> <a name="ip_resource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.ipResource"></a>

```python
ip_resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VpclatticeResourceConfigurationResourceConfigurationDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a>

---


### VpclatticeResourceConfigurationTagsList <a name="VpclatticeResourceConfigurationTagsList" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_resource_configuration

vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpclatticeResourceConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[VpclatticeResourceConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>]

---


### VpclatticeResourceConfigurationTagsOutputReference <a name="VpclatticeResourceConfigurationTagsOutputReference" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_resource_configuration

vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VpclatticeResourceConfigurationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>

---



