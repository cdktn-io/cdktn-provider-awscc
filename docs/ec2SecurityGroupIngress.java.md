# `ec2SecurityGroupIngress` Submodule <a name="`ec2SecurityGroupIngress` Submodule" id="@cdktn/provider-awscc.ec2SecurityGroupIngress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SecurityGroupIngress <a name="Ec2SecurityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress awscc_ec2_security_group_ingress}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group_ingress.Ec2SecurityGroupIngress;

Ec2SecurityGroupIngress.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ipProtocol(java.lang.String)
//  .cidrIp(java.lang.String)
//  .cidrIpv6(java.lang.String)
//  .description(java.lang.String)
//  .fromPort(java.lang.Number)
//  .groupId(java.lang.String)
//  .groupName(java.lang.String)
//  .sourcePrefixListId(java.lang.String)
//  .sourceSecurityGroupId(java.lang.String)
//  .sourceSecurityGroupName(java.lang.String)
//  .sourceSecurityGroupOwnerId(java.lang.String)
//  .toPort(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | The IP protocol name (tcp, udp, icmp, icmpv6) or number (see Protocol Numbers). |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.cidrIp">cidrIp</a></code> | <code>java.lang.String</code> | The IPv4 ranges. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.cidrIpv6">cidrIpv6</a></code> | <code>java.lang.String</code> | [VPC only] The IPv6 ranges. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Updates the description of an ingress (inbound) security group rule. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.groupId">groupId</a></code> | <code>java.lang.String</code> | The ID of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.groupName">groupName</a></code> | <code>java.lang.String</code> | The name of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.sourcePrefixListId">sourcePrefixListId</a></code> | <code>java.lang.String</code> | [EC2-VPC only] The ID of a prefix list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.sourceSecurityGroupId">sourceSecurityGroupId</a></code> | <code>java.lang.String</code> | The ID of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.sourceSecurityGroupName">sourceSecurityGroupName</a></code> | <code>java.lang.String</code> | [EC2-Classic, default VPC] The name of the source security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.sourceSecurityGroupOwnerId">sourceSecurityGroupOwnerId</a></code> | <code>java.lang.String</code> | [nondefault VPC] The AWS account ID that owns the source security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.toPort">toPort</a></code> | <code>java.lang.Number</code> | The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.ipProtocol"></a>

- *Type:* java.lang.String

The IP protocol name (tcp, udp, icmp, icmpv6) or number (see Protocol Numbers).

[VPC only] Use -1 to specify all protocols. When authorizing security group rules, specifying -1 or a protocol number other than tcp, udp, icmp, or icmpv6 allows traffic on all ports, regardless of any port range you specify. For tcp, udp, and icmp, you must specify a port range. For icmpv6, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#ip_protocol Ec2SecurityGroupIngress#ip_protocol}

---

##### `cidrIp`<sup>Optional</sup> <a name="cidrIp" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.cidrIp"></a>

- *Type:* java.lang.String

The IPv4 ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#cidr_ip Ec2SecurityGroupIngress#cidr_ip}

---

##### `cidrIpv6`<sup>Optional</sup> <a name="cidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.cidrIpv6"></a>

- *Type:* java.lang.String

[VPC only] The IPv6 ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#cidr_ipv_6 Ec2SecurityGroupIngress#cidr_ipv_6}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Updates the description of an ingress (inbound) security group rule.

You can replace an existing description, or add a description to a rule that did not have one previously

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#description Ec2SecurityGroupIngress#description}

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.fromPort"></a>

- *Type:* java.lang.Number

The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number.

A value of -1 indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you must specify all codes.

Use this for ICMP and any protocol that uses ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#from_port Ec2SecurityGroupIngress#from_port}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.groupId"></a>

- *Type:* java.lang.String

The ID of the security group.

You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.

You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#group_id Ec2SecurityGroupIngress#group_id}

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.groupName"></a>

- *Type:* java.lang.String

The name of the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#group_name Ec2SecurityGroupIngress#group_name}

---

##### `sourcePrefixListId`<sup>Optional</sup> <a name="sourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.sourcePrefixListId"></a>

- *Type:* java.lang.String

[EC2-VPC only] The ID of a prefix list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#source_prefix_list_id Ec2SecurityGroupIngress#source_prefix_list_id}

---

##### `sourceSecurityGroupId`<sup>Optional</sup> <a name="sourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.sourceSecurityGroupId"></a>

- *Type:* java.lang.String

The ID of the security group.

You must specify either the security group ID or the security group name. For security groups in a nondefault VPC, you must specify the security group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#source_security_group_id Ec2SecurityGroupIngress#source_security_group_id}

---

##### `sourceSecurityGroupName`<sup>Optional</sup> <a name="sourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.sourceSecurityGroupName"></a>

- *Type:* java.lang.String

[EC2-Classic, default VPC] The name of the source security group.

You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#source_security_group_name Ec2SecurityGroupIngress#source_security_group_name}

---

##### `sourceSecurityGroupOwnerId`<sup>Optional</sup> <a name="sourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.sourceSecurityGroupOwnerId"></a>

- *Type:* java.lang.String

[nondefault VPC] The AWS account ID that owns the source security group.

You can't specify this property with an IP address range.

If you specify SourceSecurityGroupName or SourceSecurityGroupId and that security group is owned by a different account than the account creating the stack, you must specify the SourceSecurityGroupOwnerId; otherwise, this property is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#source_security_group_owner_id Ec2SecurityGroupIngress#source_security_group_owner_id}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.toPort"></a>

- *Type:* java.lang.Number

The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code.

A value of -1 indicates all ICMP/ICMPv6 codes for the specified ICMP type. If you specify all ICMP/ICMPv6 types, you must specify all codes.

Use this for ICMP and any protocol that uses ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#to_port Ec2SecurityGroupIngress#to_port}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetCidrIp">resetCidrIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetCidrIpv6">resetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetGroupName">resetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourcePrefixListId">resetSourcePrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupId">resetSourceSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupName">resetSourceSecurityGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupOwnerId">resetSourceSecurityGroupOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCidrIp` <a name="resetCidrIp" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetCidrIp"></a>

```java
public void resetCidrIp()
```

##### `resetCidrIpv6` <a name="resetCidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetCidrIpv6"></a>

```java
public void resetCidrIpv6()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetFromPort"></a>

```java
public void resetFromPort()
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetGroupName` <a name="resetGroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetGroupName"></a>

```java
public void resetGroupName()
```

##### `resetSourcePrefixListId` <a name="resetSourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourcePrefixListId"></a>

```java
public void resetSourcePrefixListId()
```

##### `resetSourceSecurityGroupId` <a name="resetSourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupId"></a>

```java
public void resetSourceSecurityGroupId()
```

##### `resetSourceSecurityGroupName` <a name="resetSourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupName"></a>

```java
public void resetSourceSecurityGroupName()
```

##### `resetSourceSecurityGroupOwnerId` <a name="resetSourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupOwnerId"></a>

```java
public void resetSourceSecurityGroupOwnerId()
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetToPort"></a>

```java
public void resetToPort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2SecurityGroupIngress resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group_ingress.Ec2SecurityGroupIngress;

Ec2SecurityGroupIngress.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group_ingress.Ec2SecurityGroupIngress;

Ec2SecurityGroupIngress.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group_ingress.Ec2SecurityGroupIngress;

Ec2SecurityGroupIngress.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group_ingress.Ec2SecurityGroupIngress;

Ec2SecurityGroupIngress.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2SecurityGroupIngress.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2SecurityGroupIngress resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2SecurityGroupIngress to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2SecurityGroupIngress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SecurityGroupIngress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.securityGroupIngressId">securityGroupIngressId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpInput">cidrIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpv6Input">cidrIpv6Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fromPortInput">fromPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupNameInput">groupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.ipProtocolInput">ipProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourcePrefixListIdInput">sourcePrefixListIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupIdInput">sourceSecurityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupNameInput">sourceSecurityGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupOwnerIdInput">sourceSecurityGroupOwnerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.toPortInput">toPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIp">cidrIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpv6">cidrIpv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourcePrefixListId">sourcePrefixListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupId">sourceSecurityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupName">sourceSecurityGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupOwnerId">sourceSecurityGroupOwnerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `securityGroupIngressId`<sup>Required</sup> <a name="securityGroupIngressId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.securityGroupIngressId"></a>

```java
public java.lang.String getSecurityGroupIngressId();
```

- *Type:* java.lang.String

---

##### `cidrIpInput`<sup>Optional</sup> <a name="cidrIpInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpInput"></a>

```java
public java.lang.String getCidrIpInput();
```

- *Type:* java.lang.String

---

##### `cidrIpv6Input`<sup>Optional</sup> <a name="cidrIpv6Input" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpv6Input"></a>

```java
public java.lang.String getCidrIpv6Input();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fromPortInput"></a>

```java
public java.lang.Number getFromPortInput();
```

- *Type:* java.lang.Number

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupNameInput"></a>

```java
public java.lang.String getGroupNameInput();
```

- *Type:* java.lang.String

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.ipProtocolInput"></a>

```java
public java.lang.String getIpProtocolInput();
```

- *Type:* java.lang.String

---

##### `sourcePrefixListIdInput`<sup>Optional</sup> <a name="sourcePrefixListIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourcePrefixListIdInput"></a>

```java
public java.lang.String getSourcePrefixListIdInput();
```

- *Type:* java.lang.String

---

##### `sourceSecurityGroupIdInput`<sup>Optional</sup> <a name="sourceSecurityGroupIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupIdInput"></a>

```java
public java.lang.String getSourceSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `sourceSecurityGroupNameInput`<sup>Optional</sup> <a name="sourceSecurityGroupNameInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupNameInput"></a>

```java
public java.lang.String getSourceSecurityGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sourceSecurityGroupOwnerIdInput`<sup>Optional</sup> <a name="sourceSecurityGroupOwnerIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupOwnerIdInput"></a>

```java
public java.lang.String getSourceSecurityGroupOwnerIdInput();
```

- *Type:* java.lang.String

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.toPortInput"></a>

```java
public java.lang.Number getToPortInput();
```

- *Type:* java.lang.Number

---

##### `cidrIp`<sup>Required</sup> <a name="cidrIp" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIp"></a>

```java
public java.lang.String getCidrIp();
```

- *Type:* java.lang.String

---

##### `cidrIpv6`<sup>Required</sup> <a name="cidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpv6"></a>

```java
public java.lang.String getCidrIpv6();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

---

##### `sourcePrefixListId`<sup>Required</sup> <a name="sourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourcePrefixListId"></a>

```java
public java.lang.String getSourcePrefixListId();
```

- *Type:* java.lang.String

---

##### `sourceSecurityGroupId`<sup>Required</sup> <a name="sourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupId"></a>

```java
public java.lang.String getSourceSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `sourceSecurityGroupName`<sup>Required</sup> <a name="sourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupName"></a>

```java
public java.lang.String getSourceSecurityGroupName();
```

- *Type:* java.lang.String

---

##### `sourceSecurityGroupOwnerId`<sup>Required</sup> <a name="sourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupOwnerId"></a>

```java
public java.lang.String getSourceSecurityGroupOwnerId();
```

- *Type:* java.lang.String

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SecurityGroupIngressConfig <a name="Ec2SecurityGroupIngressConfig" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group_ingress.Ec2SecurityGroupIngressConfig;

Ec2SecurityGroupIngressConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ipProtocol(java.lang.String)
//  .cidrIp(java.lang.String)
//  .cidrIpv6(java.lang.String)
//  .description(java.lang.String)
//  .fromPort(java.lang.Number)
//  .groupId(java.lang.String)
//  .groupName(java.lang.String)
//  .sourcePrefixListId(java.lang.String)
//  .sourceSecurityGroupId(java.lang.String)
//  .sourceSecurityGroupName(java.lang.String)
//  .sourceSecurityGroupOwnerId(java.lang.String)
//  .toPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | The IP protocol name (tcp, udp, icmp, icmpv6) or number (see Protocol Numbers). |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.cidrIp">cidrIp</a></code> | <code>java.lang.String</code> | The IPv4 ranges. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.cidrIpv6">cidrIpv6</a></code> | <code>java.lang.String</code> | [VPC only] The IPv6 ranges. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.description">description</a></code> | <code>java.lang.String</code> | Updates the description of an ingress (inbound) security group rule. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.groupId">groupId</a></code> | <code>java.lang.String</code> | The ID of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.groupName">groupName</a></code> | <code>java.lang.String</code> | The name of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourcePrefixListId">sourcePrefixListId</a></code> | <code>java.lang.String</code> | [EC2-VPC only] The ID of a prefix list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupId">sourceSecurityGroupId</a></code> | <code>java.lang.String</code> | The ID of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupName">sourceSecurityGroupName</a></code> | <code>java.lang.String</code> | [EC2-Classic, default VPC] The name of the source security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupOwnerId">sourceSecurityGroupOwnerId</a></code> | <code>java.lang.String</code> | [nondefault VPC] The AWS account ID that owns the source security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

The IP protocol name (tcp, udp, icmp, icmpv6) or number (see Protocol Numbers).

[VPC only] Use -1 to specify all protocols. When authorizing security group rules, specifying -1 or a protocol number other than tcp, udp, icmp, or icmpv6 allows traffic on all ports, regardless of any port range you specify. For tcp, udp, and icmp, you must specify a port range. For icmpv6, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#ip_protocol Ec2SecurityGroupIngress#ip_protocol}

---

##### `cidrIp`<sup>Optional</sup> <a name="cidrIp" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.cidrIp"></a>

```java
public java.lang.String getCidrIp();
```

- *Type:* java.lang.String

The IPv4 ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#cidr_ip Ec2SecurityGroupIngress#cidr_ip}

---

##### `cidrIpv6`<sup>Optional</sup> <a name="cidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.cidrIpv6"></a>

```java
public java.lang.String getCidrIpv6();
```

- *Type:* java.lang.String

[VPC only] The IPv6 ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#cidr_ipv_6 Ec2SecurityGroupIngress#cidr_ipv_6}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Updates the description of an ingress (inbound) security group rule.

You can replace an existing description, or add a description to a rule that did not have one previously

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#description Ec2SecurityGroupIngress#description}

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number.

A value of -1 indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you must specify all codes.

Use this for ICMP and any protocol that uses ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#from_port Ec2SecurityGroupIngress#from_port}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

The ID of the security group.

You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.

You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#group_id Ec2SecurityGroupIngress#group_id}

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

The name of the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#group_name Ec2SecurityGroupIngress#group_name}

---

##### `sourcePrefixListId`<sup>Optional</sup> <a name="sourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourcePrefixListId"></a>

```java
public java.lang.String getSourcePrefixListId();
```

- *Type:* java.lang.String

[EC2-VPC only] The ID of a prefix list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#source_prefix_list_id Ec2SecurityGroupIngress#source_prefix_list_id}

---

##### `sourceSecurityGroupId`<sup>Optional</sup> <a name="sourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupId"></a>

```java
public java.lang.String getSourceSecurityGroupId();
```

- *Type:* java.lang.String

The ID of the security group.

You must specify either the security group ID or the security group name. For security groups in a nondefault VPC, you must specify the security group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#source_security_group_id Ec2SecurityGroupIngress#source_security_group_id}

---

##### `sourceSecurityGroupName`<sup>Optional</sup> <a name="sourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupName"></a>

```java
public java.lang.String getSourceSecurityGroupName();
```

- *Type:* java.lang.String

[EC2-Classic, default VPC] The name of the source security group.

You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#source_security_group_name Ec2SecurityGroupIngress#source_security_group_name}

---

##### `sourceSecurityGroupOwnerId`<sup>Optional</sup> <a name="sourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupOwnerId"></a>

```java
public java.lang.String getSourceSecurityGroupOwnerId();
```

- *Type:* java.lang.String

[nondefault VPC] The AWS account ID that owns the source security group.

You can't specify this property with an IP address range.

If you specify SourceSecurityGroupName or SourceSecurityGroupId and that security group is owned by a different account than the account creating the stack, you must specify the SourceSecurityGroupOwnerId; otherwise, this property is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#source_security_group_owner_id Ec2SecurityGroupIngress#source_security_group_owner_id}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code.

A value of -1 indicates all ICMP/ICMPv6 codes for the specified ICMP type. If you specify all ICMP/ICMPv6 types, you must specify all codes.

Use this for ICMP and any protocol that uses ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_security_group_ingress#to_port Ec2SecurityGroupIngress#to_port}

---



