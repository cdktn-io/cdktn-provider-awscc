# `ec2TransitGatewayMeteringPolicyEntry` Submodule <a name="`ec2TransitGatewayMeteringPolicyEntry` Submodule" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayMeteringPolicyEntry <a name="Ec2TransitGatewayMeteringPolicyEntry" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry awscc_ec2_transit_gateway_metering_policy_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_metering_policy_entry.Ec2TransitGatewayMeteringPolicyEntry;

Ec2TransitGatewayMeteringPolicyEntry.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .meteredAccount(java.lang.String)
    .policyRuleNumber(java.lang.Number)
    .transitGatewayMeteringPolicyId(java.lang.String)
//  .destinationCidrBlock(java.lang.String)
//  .destinationPortRange(java.lang.String)
//  .destinationTransitGatewayAttachmentId(java.lang.String)
//  .destinationTransitGatewayAttachmentType(java.lang.String)
//  .protocol(java.lang.String)
//  .sourceCidrBlock(java.lang.String)
//  .sourcePortRange(java.lang.String)
//  .sourceTransitGatewayAttachmentId(java.lang.String)
//  .sourceTransitGatewayAttachmentType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.meteredAccount">meteredAccount</a></code> | <code>java.lang.String</code> | The resource owner information responsible for paying default billable charges for the traffic flow. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.policyRuleNumber">policyRuleNumber</a></code> | <code>java.lang.Number</code> | The rule number of the metering policy entry. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.transitGatewayMeteringPolicyId">transitGatewayMeteringPolicyId</a></code> | <code>java.lang.String</code> | The ID of the transit gateway metering policy for which the entry is being created. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.destinationCidrBlock">destinationCidrBlock</a></code> | <code>java.lang.String</code> | The list of IP addresses of the instances receiving traffic from the transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.destinationPortRange">destinationPortRange</a></code> | <code>java.lang.String</code> | The list of ports on destination instances receiving traffic from the transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.destinationTransitGatewayAttachmentId">destinationTransitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | The ID of the source attachment through which traffic leaves a transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.destinationTransitGatewayAttachmentType">destinationTransitGatewayAttachmentType</a></code> | <code>java.lang.String</code> | The type of the attachment through which traffic leaves a transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | The protocol of the traffic. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.sourceCidrBlock">sourceCidrBlock</a></code> | <code>java.lang.String</code> | The list of IP addresses of the instances sending traffic to the transit gateway for which the metering policy entry is applicable. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.sourcePortRange">sourcePortRange</a></code> | <code>java.lang.String</code> | The list of ports on source instances sending traffic to the transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.sourceTransitGatewayAttachmentId">sourceTransitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | The ID of the source attachment through which traffic enters a transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.sourceTransitGatewayAttachmentType">sourceTransitGatewayAttachmentType</a></code> | <code>java.lang.String</code> | The type of the attachment through which traffic enters a  transit gateway. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `meteredAccount`<sup>Required</sup> <a name="meteredAccount" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.meteredAccount"></a>

- *Type:* java.lang.String

The resource owner information responsible for paying default billable charges for the traffic flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#metered_account Ec2TransitGatewayMeteringPolicyEntry#metered_account}

---

##### `policyRuleNumber`<sup>Required</sup> <a name="policyRuleNumber" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.policyRuleNumber"></a>

- *Type:* java.lang.Number

The rule number of the metering policy entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#policy_rule_number Ec2TransitGatewayMeteringPolicyEntry#policy_rule_number}

---

##### `transitGatewayMeteringPolicyId`<sup>Required</sup> <a name="transitGatewayMeteringPolicyId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.transitGatewayMeteringPolicyId"></a>

- *Type:* java.lang.String

The ID of the transit gateway metering policy for which the entry is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#transit_gateway_metering_policy_id Ec2TransitGatewayMeteringPolicyEntry#transit_gateway_metering_policy_id}

---

##### `destinationCidrBlock`<sup>Optional</sup> <a name="destinationCidrBlock" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.destinationCidrBlock"></a>

- *Type:* java.lang.String

The list of IP addresses of the instances receiving traffic from the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_cidr_block Ec2TransitGatewayMeteringPolicyEntry#destination_cidr_block}

---

##### `destinationPortRange`<sup>Optional</sup> <a name="destinationPortRange" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.destinationPortRange"></a>

- *Type:* java.lang.String

The list of ports on destination instances receiving traffic from the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_port_range Ec2TransitGatewayMeteringPolicyEntry#destination_port_range}

---

##### `destinationTransitGatewayAttachmentId`<sup>Optional</sup> <a name="destinationTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.destinationTransitGatewayAttachmentId"></a>

- *Type:* java.lang.String

The ID of the source attachment through which traffic leaves a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_transit_gateway_attachment_id Ec2TransitGatewayMeteringPolicyEntry#destination_transit_gateway_attachment_id}

---

##### `destinationTransitGatewayAttachmentType`<sup>Optional</sup> <a name="destinationTransitGatewayAttachmentType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.destinationTransitGatewayAttachmentType"></a>

- *Type:* java.lang.String

The type of the attachment through which traffic leaves a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_transit_gateway_attachment_type Ec2TransitGatewayMeteringPolicyEntry#destination_transit_gateway_attachment_type}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

The protocol of the traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#protocol Ec2TransitGatewayMeteringPolicyEntry#protocol}

---

##### `sourceCidrBlock`<sup>Optional</sup> <a name="sourceCidrBlock" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.sourceCidrBlock"></a>

- *Type:* java.lang.String

The list of IP addresses of the instances sending traffic to the transit gateway for which the metering policy entry is applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_cidr_block Ec2TransitGatewayMeteringPolicyEntry#source_cidr_block}

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.sourcePortRange"></a>

- *Type:* java.lang.String

The list of ports on source instances sending traffic to the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_port_range Ec2TransitGatewayMeteringPolicyEntry#source_port_range}

---

##### `sourceTransitGatewayAttachmentId`<sup>Optional</sup> <a name="sourceTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.sourceTransitGatewayAttachmentId"></a>

- *Type:* java.lang.String

The ID of the source attachment through which traffic enters a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_transit_gateway_attachment_id Ec2TransitGatewayMeteringPolicyEntry#source_transit_gateway_attachment_id}

---

##### `sourceTransitGatewayAttachmentType`<sup>Optional</sup> <a name="sourceTransitGatewayAttachmentType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.sourceTransitGatewayAttachmentType"></a>

- *Type:* java.lang.String

The type of the attachment through which traffic enters a  transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_transit_gateway_attachment_type Ec2TransitGatewayMeteringPolicyEntry#source_transit_gateway_attachment_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationCidrBlock">resetDestinationCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationPortRange">resetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationTransitGatewayAttachmentId">resetDestinationTransitGatewayAttachmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationTransitGatewayAttachmentType">resetDestinationTransitGatewayAttachmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceCidrBlock">resetSourceCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceTransitGatewayAttachmentId">resetSourceTransitGatewayAttachmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceTransitGatewayAttachmentType">resetSourceTransitGatewayAttachmentType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDestinationCidrBlock` <a name="resetDestinationCidrBlock" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationCidrBlock"></a>

```java
public void resetDestinationCidrBlock()
```

##### `resetDestinationPortRange` <a name="resetDestinationPortRange" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationPortRange"></a>

```java
public void resetDestinationPortRange()
```

##### `resetDestinationTransitGatewayAttachmentId` <a name="resetDestinationTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationTransitGatewayAttachmentId"></a>

```java
public void resetDestinationTransitGatewayAttachmentId()
```

##### `resetDestinationTransitGatewayAttachmentType` <a name="resetDestinationTransitGatewayAttachmentType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationTransitGatewayAttachmentType"></a>

```java
public void resetDestinationTransitGatewayAttachmentType()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetSourceCidrBlock` <a name="resetSourceCidrBlock" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceCidrBlock"></a>

```java
public void resetSourceCidrBlock()
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourcePortRange"></a>

```java
public void resetSourcePortRange()
```

##### `resetSourceTransitGatewayAttachmentId` <a name="resetSourceTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceTransitGatewayAttachmentId"></a>

```java
public void resetSourceTransitGatewayAttachmentId()
```

##### `resetSourceTransitGatewayAttachmentType` <a name="resetSourceTransitGatewayAttachmentType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceTransitGatewayAttachmentType"></a>

```java
public void resetSourceTransitGatewayAttachmentType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayMeteringPolicyEntry resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_metering_policy_entry.Ec2TransitGatewayMeteringPolicyEntry;

Ec2TransitGatewayMeteringPolicyEntry.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_metering_policy_entry.Ec2TransitGatewayMeteringPolicyEntry;

Ec2TransitGatewayMeteringPolicyEntry.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_metering_policy_entry.Ec2TransitGatewayMeteringPolicyEntry;

Ec2TransitGatewayMeteringPolicyEntry.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_metering_policy_entry.Ec2TransitGatewayMeteringPolicyEntry;

Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2TransitGatewayMeteringPolicyEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2TransitGatewayMeteringPolicyEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2TransitGatewayMeteringPolicyEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayMeteringPolicyEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.updateEffectiveAt">updateEffectiveAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationCidrBlockInput">destinationCidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationPortRangeInput">destinationPortRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentIdInput">destinationTransitGatewayAttachmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentTypeInput">destinationTransitGatewayAttachmentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.meteredAccountInput">meteredAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.policyRuleNumberInput">policyRuleNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceCidrBlockInput">sourceCidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentIdInput">sourceTransitGatewayAttachmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentTypeInput">sourceTransitGatewayAttachmentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.transitGatewayMeteringPolicyIdInput">transitGatewayMeteringPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationPortRange">destinationPortRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentId">destinationTransitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentType">destinationTransitGatewayAttachmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.meteredAccount">meteredAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.policyRuleNumber">policyRuleNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceCidrBlock">sourceCidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourcePortRange">sourcePortRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentId">sourceTransitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentType">sourceTransitGatewayAttachmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.transitGatewayMeteringPolicyId">transitGatewayMeteringPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `updateEffectiveAt`<sup>Required</sup> <a name="updateEffectiveAt" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.updateEffectiveAt"></a>

```java
public java.lang.String getUpdateEffectiveAt();
```

- *Type:* java.lang.String

---

##### `destinationCidrBlockInput`<sup>Optional</sup> <a name="destinationCidrBlockInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationCidrBlockInput"></a>

```java
public java.lang.String getDestinationCidrBlockInput();
```

- *Type:* java.lang.String

---

##### `destinationPortRangeInput`<sup>Optional</sup> <a name="destinationPortRangeInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationPortRangeInput"></a>

```java
public java.lang.String getDestinationPortRangeInput();
```

- *Type:* java.lang.String

---

##### `destinationTransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="destinationTransitGatewayAttachmentIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentIdInput"></a>

```java
public java.lang.String getDestinationTransitGatewayAttachmentIdInput();
```

- *Type:* java.lang.String

---

##### `destinationTransitGatewayAttachmentTypeInput`<sup>Optional</sup> <a name="destinationTransitGatewayAttachmentTypeInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentTypeInput"></a>

```java
public java.lang.String getDestinationTransitGatewayAttachmentTypeInput();
```

- *Type:* java.lang.String

---

##### `meteredAccountInput`<sup>Optional</sup> <a name="meteredAccountInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.meteredAccountInput"></a>

```java
public java.lang.String getMeteredAccountInput();
```

- *Type:* java.lang.String

---

##### `policyRuleNumberInput`<sup>Optional</sup> <a name="policyRuleNumberInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.policyRuleNumberInput"></a>

```java
public java.lang.Number getPolicyRuleNumberInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `sourceCidrBlockInput`<sup>Optional</sup> <a name="sourceCidrBlockInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceCidrBlockInput"></a>

```java
public java.lang.String getSourceCidrBlockInput();
```

- *Type:* java.lang.String

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourcePortRangeInput"></a>

```java
public java.lang.String getSourcePortRangeInput();
```

- *Type:* java.lang.String

---

##### `sourceTransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="sourceTransitGatewayAttachmentIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentIdInput"></a>

```java
public java.lang.String getSourceTransitGatewayAttachmentIdInput();
```

- *Type:* java.lang.String

---

##### `sourceTransitGatewayAttachmentTypeInput`<sup>Optional</sup> <a name="sourceTransitGatewayAttachmentTypeInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentTypeInput"></a>

```java
public java.lang.String getSourceTransitGatewayAttachmentTypeInput();
```

- *Type:* java.lang.String

---

##### `transitGatewayMeteringPolicyIdInput`<sup>Optional</sup> <a name="transitGatewayMeteringPolicyIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.transitGatewayMeteringPolicyIdInput"></a>

```java
public java.lang.String getTransitGatewayMeteringPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `destinationCidrBlock`<sup>Required</sup> <a name="destinationCidrBlock" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationCidrBlock"></a>

```java
public java.lang.String getDestinationCidrBlock();
```

- *Type:* java.lang.String

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationPortRange"></a>

```java
public java.lang.String getDestinationPortRange();
```

- *Type:* java.lang.String

---

##### `destinationTransitGatewayAttachmentId`<sup>Required</sup> <a name="destinationTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentId"></a>

```java
public java.lang.String getDestinationTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

---

##### `destinationTransitGatewayAttachmentType`<sup>Required</sup> <a name="destinationTransitGatewayAttachmentType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentType"></a>

```java
public java.lang.String getDestinationTransitGatewayAttachmentType();
```

- *Type:* java.lang.String

---

##### `meteredAccount`<sup>Required</sup> <a name="meteredAccount" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.meteredAccount"></a>

```java
public java.lang.String getMeteredAccount();
```

- *Type:* java.lang.String

---

##### `policyRuleNumber`<sup>Required</sup> <a name="policyRuleNumber" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.policyRuleNumber"></a>

```java
public java.lang.Number getPolicyRuleNumber();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `sourceCidrBlock`<sup>Required</sup> <a name="sourceCidrBlock" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceCidrBlock"></a>

```java
public java.lang.String getSourceCidrBlock();
```

- *Type:* java.lang.String

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourcePortRange"></a>

```java
public java.lang.String getSourcePortRange();
```

- *Type:* java.lang.String

---

##### `sourceTransitGatewayAttachmentId`<sup>Required</sup> <a name="sourceTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentId"></a>

```java
public java.lang.String getSourceTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

---

##### `sourceTransitGatewayAttachmentType`<sup>Required</sup> <a name="sourceTransitGatewayAttachmentType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentType"></a>

```java
public java.lang.String getSourceTransitGatewayAttachmentType();
```

- *Type:* java.lang.String

---

##### `transitGatewayMeteringPolicyId`<sup>Required</sup> <a name="transitGatewayMeteringPolicyId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.transitGatewayMeteringPolicyId"></a>

```java
public java.lang.String getTransitGatewayMeteringPolicyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayMeteringPolicyEntryConfig <a name="Ec2TransitGatewayMeteringPolicyEntryConfig" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_metering_policy_entry.Ec2TransitGatewayMeteringPolicyEntryConfig;

Ec2TransitGatewayMeteringPolicyEntryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .meteredAccount(java.lang.String)
    .policyRuleNumber(java.lang.Number)
    .transitGatewayMeteringPolicyId(java.lang.String)
//  .destinationCidrBlock(java.lang.String)
//  .destinationPortRange(java.lang.String)
//  .destinationTransitGatewayAttachmentId(java.lang.String)
//  .destinationTransitGatewayAttachmentType(java.lang.String)
//  .protocol(java.lang.String)
//  .sourceCidrBlock(java.lang.String)
//  .sourcePortRange(java.lang.String)
//  .sourceTransitGatewayAttachmentId(java.lang.String)
//  .sourceTransitGatewayAttachmentType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.meteredAccount">meteredAccount</a></code> | <code>java.lang.String</code> | The resource owner information responsible for paying default billable charges for the traffic flow. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.policyRuleNumber">policyRuleNumber</a></code> | <code>java.lang.Number</code> | The rule number of the metering policy entry. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.transitGatewayMeteringPolicyId">transitGatewayMeteringPolicyId</a></code> | <code>java.lang.String</code> | The ID of the transit gateway metering policy for which the entry is being created. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>java.lang.String</code> | The list of IP addresses of the instances receiving traffic from the transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationPortRange">destinationPortRange</a></code> | <code>java.lang.String</code> | The list of ports on destination instances receiving traffic from the transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationTransitGatewayAttachmentId">destinationTransitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | The ID of the source attachment through which traffic leaves a transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationTransitGatewayAttachmentType">destinationTransitGatewayAttachmentType</a></code> | <code>java.lang.String</code> | The type of the attachment through which traffic leaves a transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The protocol of the traffic. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceCidrBlock">sourceCidrBlock</a></code> | <code>java.lang.String</code> | The list of IP addresses of the instances sending traffic to the transit gateway for which the metering policy entry is applicable. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourcePortRange">sourcePortRange</a></code> | <code>java.lang.String</code> | The list of ports on source instances sending traffic to the transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceTransitGatewayAttachmentId">sourceTransitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | The ID of the source attachment through which traffic enters a transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceTransitGatewayAttachmentType">sourceTransitGatewayAttachmentType</a></code> | <code>java.lang.String</code> | The type of the attachment through which traffic enters a  transit gateway. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `meteredAccount`<sup>Required</sup> <a name="meteredAccount" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.meteredAccount"></a>

```java
public java.lang.String getMeteredAccount();
```

- *Type:* java.lang.String

The resource owner information responsible for paying default billable charges for the traffic flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#metered_account Ec2TransitGatewayMeteringPolicyEntry#metered_account}

---

##### `policyRuleNumber`<sup>Required</sup> <a name="policyRuleNumber" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.policyRuleNumber"></a>

```java
public java.lang.Number getPolicyRuleNumber();
```

- *Type:* java.lang.Number

The rule number of the metering policy entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#policy_rule_number Ec2TransitGatewayMeteringPolicyEntry#policy_rule_number}

---

##### `transitGatewayMeteringPolicyId`<sup>Required</sup> <a name="transitGatewayMeteringPolicyId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.transitGatewayMeteringPolicyId"></a>

```java
public java.lang.String getTransitGatewayMeteringPolicyId();
```

- *Type:* java.lang.String

The ID of the transit gateway metering policy for which the entry is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#transit_gateway_metering_policy_id Ec2TransitGatewayMeteringPolicyEntry#transit_gateway_metering_policy_id}

---

##### `destinationCidrBlock`<sup>Optional</sup> <a name="destinationCidrBlock" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationCidrBlock"></a>

```java
public java.lang.String getDestinationCidrBlock();
```

- *Type:* java.lang.String

The list of IP addresses of the instances receiving traffic from the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_cidr_block Ec2TransitGatewayMeteringPolicyEntry#destination_cidr_block}

---

##### `destinationPortRange`<sup>Optional</sup> <a name="destinationPortRange" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationPortRange"></a>

```java
public java.lang.String getDestinationPortRange();
```

- *Type:* java.lang.String

The list of ports on destination instances receiving traffic from the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_port_range Ec2TransitGatewayMeteringPolicyEntry#destination_port_range}

---

##### `destinationTransitGatewayAttachmentId`<sup>Optional</sup> <a name="destinationTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationTransitGatewayAttachmentId"></a>

```java
public java.lang.String getDestinationTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

The ID of the source attachment through which traffic leaves a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_transit_gateway_attachment_id Ec2TransitGatewayMeteringPolicyEntry#destination_transit_gateway_attachment_id}

---

##### `destinationTransitGatewayAttachmentType`<sup>Optional</sup> <a name="destinationTransitGatewayAttachmentType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationTransitGatewayAttachmentType"></a>

```java
public java.lang.String getDestinationTransitGatewayAttachmentType();
```

- *Type:* java.lang.String

The type of the attachment through which traffic leaves a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_transit_gateway_attachment_type Ec2TransitGatewayMeteringPolicyEntry#destination_transit_gateway_attachment_type}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The protocol of the traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#protocol Ec2TransitGatewayMeteringPolicyEntry#protocol}

---

##### `sourceCidrBlock`<sup>Optional</sup> <a name="sourceCidrBlock" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceCidrBlock"></a>

```java
public java.lang.String getSourceCidrBlock();
```

- *Type:* java.lang.String

The list of IP addresses of the instances sending traffic to the transit gateway for which the metering policy entry is applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_cidr_block Ec2TransitGatewayMeteringPolicyEntry#source_cidr_block}

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourcePortRange"></a>

```java
public java.lang.String getSourcePortRange();
```

- *Type:* java.lang.String

The list of ports on source instances sending traffic to the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_port_range Ec2TransitGatewayMeteringPolicyEntry#source_port_range}

---

##### `sourceTransitGatewayAttachmentId`<sup>Optional</sup> <a name="sourceTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceTransitGatewayAttachmentId"></a>

```java
public java.lang.String getSourceTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

The ID of the source attachment through which traffic enters a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_transit_gateway_attachment_id Ec2TransitGatewayMeteringPolicyEntry#source_transit_gateway_attachment_id}

---

##### `sourceTransitGatewayAttachmentType`<sup>Optional</sup> <a name="sourceTransitGatewayAttachmentType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceTransitGatewayAttachmentType"></a>

```java
public java.lang.String getSourceTransitGatewayAttachmentType();
```

- *Type:* java.lang.String

The type of the attachment through which traffic enters a  transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_transit_gateway_attachment_type Ec2TransitGatewayMeteringPolicyEntry#source_transit_gateway_attachment_type}

---



