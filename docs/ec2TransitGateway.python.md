# `ec2TransitGateway` Submodule <a name="`ec2TransitGateway` Submodule" id="@cdktn/provider-awscc.ec2TransitGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGateway <a name="Ec2TransitGateway" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway awscc_ec2_transit_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_transit_gateway

ec2TransitGateway.Ec2TransitGateway(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  amazon_side_asn: typing.Union[int, float] = None,
  association_default_route_table_id: str = None,
  auto_accept_shared_attachments: str = None,
  default_route_table_association: str = None,
  default_route_table_propagation: str = None,
  description: str = None,
  dns_support: str = None,
  encryption_support: str = None,
  multicast_support: str = None,
  propagation_default_route_table_id: str = None,
  security_group_referencing_support: str = None,
  tags: IResolvable | typing.List[Ec2TransitGatewayTags] = None,
  transit_gateway_cidr_blocks: typing.List[str] = None,
  vpn_ecmp_support: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.amazonSideAsn">amazon_side_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#amazon_side_asn Ec2TransitGateway#amazon_side_asn}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.associationDefaultRouteTableId">association_default_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#association_default_route_table_id Ec2TransitGateway#association_default_route_table_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.autoAcceptSharedAttachments">auto_accept_shared_attachments</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.defaultRouteTableAssociation">default_route_table_association</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#default_route_table_association Ec2TransitGateway#default_route_table_association}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.defaultRouteTablePropagation">default_route_table_propagation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#description Ec2TransitGateway#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.dnsSupport">dns_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#dns_support Ec2TransitGateway#dns_support}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.encryptionSupport">encryption_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#encryption_support Ec2TransitGateway#encryption_support}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.multicastSupport">multicast_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#multicast_support Ec2TransitGateway#multicast_support}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.propagationDefaultRouteTableId">propagation_default_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#propagation_default_route_table_id Ec2TransitGateway#propagation_default_route_table_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.securityGroupReferencingSupport">security_group_referencing_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#security_group_referencing_support Ec2TransitGateway#security_group_referencing_support}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTags">Ec2TransitGatewayTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#tags Ec2TransitGateway#tags}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.transitGatewayCidrBlocks">transit_gateway_cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#transit_gateway_cidr_blocks Ec2TransitGateway#transit_gateway_cidr_blocks}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.vpnEcmpSupport">vpn_ecmp_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `amazon_side_asn`<sup>Optional</sup> <a name="amazon_side_asn" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.amazonSideAsn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#amazon_side_asn Ec2TransitGateway#amazon_side_asn}.

---

##### `association_default_route_table_id`<sup>Optional</sup> <a name="association_default_route_table_id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.associationDefaultRouteTableId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#association_default_route_table_id Ec2TransitGateway#association_default_route_table_id}.

---

##### `auto_accept_shared_attachments`<sup>Optional</sup> <a name="auto_accept_shared_attachments" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.autoAcceptSharedAttachments"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}.

---

##### `default_route_table_association`<sup>Optional</sup> <a name="default_route_table_association" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.defaultRouteTableAssociation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#default_route_table_association Ec2TransitGateway#default_route_table_association}.

---

##### `default_route_table_propagation`<sup>Optional</sup> <a name="default_route_table_propagation" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.defaultRouteTablePropagation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#description Ec2TransitGateway#description}.

---

##### `dns_support`<sup>Optional</sup> <a name="dns_support" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.dnsSupport"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#dns_support Ec2TransitGateway#dns_support}.

---

##### `encryption_support`<sup>Optional</sup> <a name="encryption_support" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.encryptionSupport"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#encryption_support Ec2TransitGateway#encryption_support}.

---

##### `multicast_support`<sup>Optional</sup> <a name="multicast_support" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.multicastSupport"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#multicast_support Ec2TransitGateway#multicast_support}.

---

##### `propagation_default_route_table_id`<sup>Optional</sup> <a name="propagation_default_route_table_id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.propagationDefaultRouteTableId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#propagation_default_route_table_id Ec2TransitGateway#propagation_default_route_table_id}.

---

##### `security_group_referencing_support`<sup>Optional</sup> <a name="security_group_referencing_support" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.securityGroupReferencingSupport"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#security_group_referencing_support Ec2TransitGateway#security_group_referencing_support}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTags">Ec2TransitGatewayTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#tags Ec2TransitGateway#tags}.

---

##### `transit_gateway_cidr_blocks`<sup>Optional</sup> <a name="transit_gateway_cidr_blocks" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.transitGatewayCidrBlocks"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#transit_gateway_cidr_blocks Ec2TransitGateway#transit_gateway_cidr_blocks}.

---

##### `vpn_ecmp_support`<sup>Optional</sup> <a name="vpn_ecmp_support" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.Initializer.parameter.vpnEcmpSupport"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetAmazonSideAsn">reset_amazon_side_asn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetAssociationDefaultRouteTableId">reset_association_default_route_table_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetAutoAcceptSharedAttachments">reset_auto_accept_shared_attachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetDefaultRouteTableAssociation">reset_default_route_table_association</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetDefaultRouteTablePropagation">reset_default_route_table_propagation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetDnsSupport">reset_dns_support</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetEncryptionSupport">reset_encryption_support</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetMulticastSupport">reset_multicast_support</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetPropagationDefaultRouteTableId">reset_propagation_default_route_table_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetSecurityGroupReferencingSupport">reset_security_group_referencing_support</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetTransitGatewayCidrBlocks">reset_transit_gateway_cidr_blocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetVpnEcmpSupport">reset_vpn_ecmp_support</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2TransitGatewayTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTags">Ec2TransitGatewayTags</a>]

---

##### `reset_amazon_side_asn` <a name="reset_amazon_side_asn" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetAmazonSideAsn"></a>

```python
def reset_amazon_side_asn() -> None
```

##### `reset_association_default_route_table_id` <a name="reset_association_default_route_table_id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetAssociationDefaultRouteTableId"></a>

```python
def reset_association_default_route_table_id() -> None
```

##### `reset_auto_accept_shared_attachments` <a name="reset_auto_accept_shared_attachments" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetAutoAcceptSharedAttachments"></a>

```python
def reset_auto_accept_shared_attachments() -> None
```

##### `reset_default_route_table_association` <a name="reset_default_route_table_association" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetDefaultRouteTableAssociation"></a>

```python
def reset_default_route_table_association() -> None
```

##### `reset_default_route_table_propagation` <a name="reset_default_route_table_propagation" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetDefaultRouteTablePropagation"></a>

```python
def reset_default_route_table_propagation() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dns_support` <a name="reset_dns_support" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetDnsSupport"></a>

```python
def reset_dns_support() -> None
```

##### `reset_encryption_support` <a name="reset_encryption_support" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetEncryptionSupport"></a>

```python
def reset_encryption_support() -> None
```

##### `reset_multicast_support` <a name="reset_multicast_support" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetMulticastSupport"></a>

```python
def reset_multicast_support() -> None
```

##### `reset_propagation_default_route_table_id` <a name="reset_propagation_default_route_table_id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetPropagationDefaultRouteTableId"></a>

```python
def reset_propagation_default_route_table_id() -> None
```

##### `reset_security_group_referencing_support` <a name="reset_security_group_referencing_support" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetSecurityGroupReferencingSupport"></a>

```python
def reset_security_group_referencing_support() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_transit_gateway_cidr_blocks` <a name="reset_transit_gateway_cidr_blocks" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetTransitGatewayCidrBlocks"></a>

```python
def reset_transit_gateway_cidr_blocks() -> None
```

##### `reset_vpn_ecmp_support` <a name="reset_vpn_ecmp_support" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.resetVpnEcmpSupport"></a>

```python
def reset_vpn_ecmp_support() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2TransitGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_transit_gateway

ec2TransitGateway.Ec2TransitGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_transit_gateway

ec2TransitGateway.Ec2TransitGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_transit_gateway

ec2TransitGateway.Ec2TransitGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_transit_gateway

ec2TransitGateway.Ec2TransitGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2TransitGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2TransitGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2TransitGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.encryptionSupportState">encryption_support_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList">Ec2TransitGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayArn">transit_gateway_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.amazonSideAsnInput">amazon_side_asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.associationDefaultRouteTableIdInput">association_default_route_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.autoAcceptSharedAttachmentsInput">auto_accept_shared_attachments_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTableAssociationInput">default_route_table_association_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTablePropagationInput">default_route_table_propagation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.dnsSupportInput">dns_support_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.encryptionSupportInput">encryption_support_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.multicastSupportInput">multicast_support_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.propagationDefaultRouteTableIdInput">propagation_default_route_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.securityGroupReferencingSupportInput">security_group_referencing_support_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTags">Ec2TransitGatewayTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayCidrBlocksInput">transit_gateway_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.vpnEcmpSupportInput">vpn_ecmp_support_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.amazonSideAsn">amazon_side_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.associationDefaultRouteTableId">association_default_route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.autoAcceptSharedAttachments">auto_accept_shared_attachments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTableAssociation">default_route_table_association</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTablePropagation">default_route_table_propagation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.dnsSupport">dns_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.encryptionSupport">encryption_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.multicastSupport">multicast_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.propagationDefaultRouteTableId">propagation_default_route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.securityGroupReferencingSupport">security_group_referencing_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayCidrBlocks">transit_gateway_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.vpnEcmpSupport">vpn_ecmp_support</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `encryption_support_state`<sup>Required</sup> <a name="encryption_support_state" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.encryptionSupportState"></a>

```python
encryption_support_state: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.tags"></a>

```python
tags: Ec2TransitGatewayTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList">Ec2TransitGatewayTagsList</a>

---

##### `transit_gateway_arn`<sup>Required</sup> <a name="transit_gateway_arn" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayArn"></a>

```python
transit_gateway_arn: str
```

- *Type:* str

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `amazon_side_asn_input`<sup>Optional</sup> <a name="amazon_side_asn_input" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.amazonSideAsnInput"></a>

```python
amazon_side_asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `association_default_route_table_id_input`<sup>Optional</sup> <a name="association_default_route_table_id_input" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.associationDefaultRouteTableIdInput"></a>

```python
association_default_route_table_id_input: str
```

- *Type:* str

---

##### `auto_accept_shared_attachments_input`<sup>Optional</sup> <a name="auto_accept_shared_attachments_input" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.autoAcceptSharedAttachmentsInput"></a>

```python
auto_accept_shared_attachments_input: str
```

- *Type:* str

---

##### `default_route_table_association_input`<sup>Optional</sup> <a name="default_route_table_association_input" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTableAssociationInput"></a>

```python
default_route_table_association_input: str
```

- *Type:* str

---

##### `default_route_table_propagation_input`<sup>Optional</sup> <a name="default_route_table_propagation_input" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTablePropagationInput"></a>

```python
default_route_table_propagation_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dns_support_input`<sup>Optional</sup> <a name="dns_support_input" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.dnsSupportInput"></a>

```python
dns_support_input: str
```

- *Type:* str

---

##### `encryption_support_input`<sup>Optional</sup> <a name="encryption_support_input" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.encryptionSupportInput"></a>

```python
encryption_support_input: str
```

- *Type:* str

---

##### `multicast_support_input`<sup>Optional</sup> <a name="multicast_support_input" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.multicastSupportInput"></a>

```python
multicast_support_input: str
```

- *Type:* str

---

##### `propagation_default_route_table_id_input`<sup>Optional</sup> <a name="propagation_default_route_table_id_input" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.propagationDefaultRouteTableIdInput"></a>

```python
propagation_default_route_table_id_input: str
```

- *Type:* str

---

##### `security_group_referencing_support_input`<sup>Optional</sup> <a name="security_group_referencing_support_input" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.securityGroupReferencingSupportInput"></a>

```python
security_group_referencing_support_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2TransitGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTags">Ec2TransitGatewayTags</a>]

---

##### `transit_gateway_cidr_blocks_input`<sup>Optional</sup> <a name="transit_gateway_cidr_blocks_input" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayCidrBlocksInput"></a>

```python
transit_gateway_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpn_ecmp_support_input`<sup>Optional</sup> <a name="vpn_ecmp_support_input" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.vpnEcmpSupportInput"></a>

```python
vpn_ecmp_support_input: str
```

- *Type:* str

---

##### `amazon_side_asn`<sup>Required</sup> <a name="amazon_side_asn" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.amazonSideAsn"></a>

```python
amazon_side_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `association_default_route_table_id`<sup>Required</sup> <a name="association_default_route_table_id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.associationDefaultRouteTableId"></a>

```python
association_default_route_table_id: str
```

- *Type:* str

---

##### `auto_accept_shared_attachments`<sup>Required</sup> <a name="auto_accept_shared_attachments" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.autoAcceptSharedAttachments"></a>

```python
auto_accept_shared_attachments: str
```

- *Type:* str

---

##### `default_route_table_association`<sup>Required</sup> <a name="default_route_table_association" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTableAssociation"></a>

```python
default_route_table_association: str
```

- *Type:* str

---

##### `default_route_table_propagation`<sup>Required</sup> <a name="default_route_table_propagation" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.defaultRouteTablePropagation"></a>

```python
default_route_table_propagation: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dns_support`<sup>Required</sup> <a name="dns_support" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.dnsSupport"></a>

```python
dns_support: str
```

- *Type:* str

---

##### `encryption_support`<sup>Required</sup> <a name="encryption_support" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.encryptionSupport"></a>

```python
encryption_support: str
```

- *Type:* str

---

##### `multicast_support`<sup>Required</sup> <a name="multicast_support" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.multicastSupport"></a>

```python
multicast_support: str
```

- *Type:* str

---

##### `propagation_default_route_table_id`<sup>Required</sup> <a name="propagation_default_route_table_id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.propagationDefaultRouteTableId"></a>

```python
propagation_default_route_table_id: str
```

- *Type:* str

---

##### `security_group_referencing_support`<sup>Required</sup> <a name="security_group_referencing_support" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.securityGroupReferencingSupport"></a>

```python
security_group_referencing_support: str
```

- *Type:* str

---

##### `transit_gateway_cidr_blocks`<sup>Required</sup> <a name="transit_gateway_cidr_blocks" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.transitGatewayCidrBlocks"></a>

```python
transit_gateway_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpn_ecmp_support`<sup>Required</sup> <a name="vpn_ecmp_support" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.vpnEcmpSupport"></a>

```python
vpn_ecmp_support: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayConfig <a name="Ec2TransitGatewayConfig" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_transit_gateway

ec2TransitGateway.Ec2TransitGatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  amazon_side_asn: typing.Union[int, float] = None,
  association_default_route_table_id: str = None,
  auto_accept_shared_attachments: str = None,
  default_route_table_association: str = None,
  default_route_table_propagation: str = None,
  description: str = None,
  dns_support: str = None,
  encryption_support: str = None,
  multicast_support: str = None,
  propagation_default_route_table_id: str = None,
  security_group_referencing_support: str = None,
  tags: IResolvable | typing.List[Ec2TransitGatewayTags] = None,
  transit_gateway_cidr_blocks: typing.List[str] = None,
  vpn_ecmp_support: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.amazonSideAsn">amazon_side_asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#amazon_side_asn Ec2TransitGateway#amazon_side_asn}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.associationDefaultRouteTableId">association_default_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#association_default_route_table_id Ec2TransitGateway#association_default_route_table_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.autoAcceptSharedAttachments">auto_accept_shared_attachments</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.defaultRouteTableAssociation">default_route_table_association</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#default_route_table_association Ec2TransitGateway#default_route_table_association}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.defaultRouteTablePropagation">default_route_table_propagation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#description Ec2TransitGateway#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.dnsSupport">dns_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#dns_support Ec2TransitGateway#dns_support}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.encryptionSupport">encryption_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#encryption_support Ec2TransitGateway#encryption_support}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.multicastSupport">multicast_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#multicast_support Ec2TransitGateway#multicast_support}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.propagationDefaultRouteTableId">propagation_default_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#propagation_default_route_table_id Ec2TransitGateway#propagation_default_route_table_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.securityGroupReferencingSupport">security_group_referencing_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#security_group_referencing_support Ec2TransitGateway#security_group_referencing_support}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTags">Ec2TransitGatewayTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#tags Ec2TransitGateway#tags}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.transitGatewayCidrBlocks">transit_gateway_cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#transit_gateway_cidr_blocks Ec2TransitGateway#transit_gateway_cidr_blocks}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.vpnEcmpSupport">vpn_ecmp_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `amazon_side_asn`<sup>Optional</sup> <a name="amazon_side_asn" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.amazonSideAsn"></a>

```python
amazon_side_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#amazon_side_asn Ec2TransitGateway#amazon_side_asn}.

---

##### `association_default_route_table_id`<sup>Optional</sup> <a name="association_default_route_table_id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.associationDefaultRouteTableId"></a>

```python
association_default_route_table_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#association_default_route_table_id Ec2TransitGateway#association_default_route_table_id}.

---

##### `auto_accept_shared_attachments`<sup>Optional</sup> <a name="auto_accept_shared_attachments" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.autoAcceptSharedAttachments"></a>

```python
auto_accept_shared_attachments: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}.

---

##### `default_route_table_association`<sup>Optional</sup> <a name="default_route_table_association" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.defaultRouteTableAssociation"></a>

```python
default_route_table_association: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#default_route_table_association Ec2TransitGateway#default_route_table_association}.

---

##### `default_route_table_propagation`<sup>Optional</sup> <a name="default_route_table_propagation" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.defaultRouteTablePropagation"></a>

```python
default_route_table_propagation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#description Ec2TransitGateway#description}.

---

##### `dns_support`<sup>Optional</sup> <a name="dns_support" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.dnsSupport"></a>

```python
dns_support: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#dns_support Ec2TransitGateway#dns_support}.

---

##### `encryption_support`<sup>Optional</sup> <a name="encryption_support" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.encryptionSupport"></a>

```python
encryption_support: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#encryption_support Ec2TransitGateway#encryption_support}.

---

##### `multicast_support`<sup>Optional</sup> <a name="multicast_support" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.multicastSupport"></a>

```python
multicast_support: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#multicast_support Ec2TransitGateway#multicast_support}.

---

##### `propagation_default_route_table_id`<sup>Optional</sup> <a name="propagation_default_route_table_id" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.propagationDefaultRouteTableId"></a>

```python
propagation_default_route_table_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#propagation_default_route_table_id Ec2TransitGateway#propagation_default_route_table_id}.

---

##### `security_group_referencing_support`<sup>Optional</sup> <a name="security_group_referencing_support" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.securityGroupReferencingSupport"></a>

```python
security_group_referencing_support: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#security_group_referencing_support Ec2TransitGateway#security_group_referencing_support}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2TransitGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTags">Ec2TransitGatewayTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#tags Ec2TransitGateway#tags}.

---

##### `transit_gateway_cidr_blocks`<sup>Optional</sup> <a name="transit_gateway_cidr_blocks" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.transitGatewayCidrBlocks"></a>

```python
transit_gateway_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#transit_gateway_cidr_blocks Ec2TransitGateway#transit_gateway_cidr_blocks}.

---

##### `vpn_ecmp_support`<sup>Optional</sup> <a name="vpn_ecmp_support" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayConfig.property.vpnEcmpSupport"></a>

```python
vpn_ecmp_support: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}.

---

### Ec2TransitGatewayTags <a name="Ec2TransitGatewayTags" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_transit_gateway

ec2TransitGateway.Ec2TransitGatewayTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#key Ec2TransitGateway#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#value Ec2TransitGateway#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#key Ec2TransitGateway#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway#value Ec2TransitGateway#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayTagsList <a name="Ec2TransitGatewayTagsList" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_transit_gateway

ec2TransitGateway.Ec2TransitGatewayTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2TransitGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTags">Ec2TransitGatewayTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2TransitGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTags">Ec2TransitGatewayTags</a>]

---


### Ec2TransitGatewayTagsOutputReference <a name="Ec2TransitGatewayTagsOutputReference" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_transit_gateway

ec2TransitGateway.Ec2TransitGatewayTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTags">Ec2TransitGatewayTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2TransitGatewayTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGateway.Ec2TransitGatewayTags">Ec2TransitGatewayTags</a>

---



