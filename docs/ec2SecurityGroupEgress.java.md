# `ec2SecurityGroupEgress` Submodule <a name="`ec2SecurityGroupEgress` Submodule" id="@cdktn/provider-awscc.ec2SecurityGroupEgress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SecurityGroupEgress <a name="Ec2SecurityGroupEgress" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_egress awscc_ec2_security_group_egress}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group_egress.Ec2SecurityGroupEgress;

Ec2SecurityGroupEgress.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .groupId(java.lang.String)
    .ipProtocol(java.lang.String)
//  .cidrIp(java.lang.String)
//  .cidrIpv6(java.lang.String)
//  .description(java.lang.String)
//  .destinationPrefixListId(java.lang.String)
//  .destinationSecurityGroupId(java.lang.String)
//  .fromPort(java.lang.Number)
//  .toPort(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.groupId">groupId</a></code> | <code>java.lang.String</code> | The ID of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | The IP protocol name (``tcp``, ``udp``, ``icmp``, ``icmpv6``) or number (see [Protocol Numbers](https://docs.aws.amazon.com/http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)).  Use ``-1`` to specify all protocols. When authorizing security group rules, specifying ``-1`` or a protocol number other than ``tcp``, ``udp``, ``icmp``, or ``icmpv6`` allows traffic on all ports, regardless of any port range you specify. For ``tcp``, ``udp``, and ``icmp``, you must specify a port range. For ``icmpv6``, the port range is optional; if you omit the port range, traffic for all types and codes is allowed. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.cidrIp">cidrIp</a></code> | <code>java.lang.String</code> | The IPv4 address range, in CIDR format. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.cidrIpv6">cidrIpv6</a></code> | <code>java.lang.String</code> | The IPv6 address range, in CIDR format. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of an egress (outbound) security group rule. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.destinationPrefixListId">destinationPrefixListId</a></code> | <code>java.lang.String</code> | The prefix list IDs for an AWS service. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.destinationSecurityGroupId">destinationSecurityGroupId</a></code> | <code>java.lang.String</code> | The ID of the security group.  You must specify exactly one of the following: ``CidrIp``, ``CidrIpv6``, ``DestinationPrefixListId``, or ``DestinationSecurityGroupId``. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | If the protocol is TCP or UDP, this is the start of the port range. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.toPort">toPort</a></code> | <code>java.lang.Number</code> | If the protocol is TCP or UDP, this is the end of the port range. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.groupId"></a>

- *Type:* java.lang.String

The ID of the security group.

You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_egress#group_id Ec2SecurityGroupEgress#group_id}

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.ipProtocol"></a>

- *Type:* java.lang.String

The IP protocol name (``tcp``, ``udp``, ``icmp``, ``icmpv6``) or number (see [Protocol Numbers](https://docs.aws.amazon.com/http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)).  Use ``-1`` to specify all protocols. When authorizing security group rules, specifying ``-1`` or a protocol number other than ``tcp``, ``udp``, ``icmp``, or ``icmpv6`` allows traffic on all ports, regardless of any port range you specify. For ``tcp``, ``udp``, and ``icmp``, you must specify a port range. For ``icmpv6``, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_egress#ip_protocol Ec2SecurityGroupEgress#ip_protocol}

---

##### `cidrIp`<sup>Optional</sup> <a name="cidrIp" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.cidrIp"></a>

- *Type:* java.lang.String

The IPv4 address range, in CIDR format.

You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.
For examples of rules that you can add to security groups for specific access scenarios, see [Security group rules for different use cases](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_egress#cidr_ip Ec2SecurityGroupEgress#cidr_ip}

---

##### `cidrIpv6`<sup>Optional</sup> <a name="cidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.cidrIpv6"></a>

- *Type:* java.lang.String

The IPv6 address range, in CIDR format.

You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.
For examples of rules that you can add to security groups for specific access scenarios, see [Security group rules for different use cases](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_egress#cidr_ipv_6 Ec2SecurityGroupEgress#cidr_ipv_6}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of an egress (outbound) security group rule.

Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=;{}!$*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_egress#description Ec2SecurityGroupEgress#description}

---

##### `destinationPrefixListId`<sup>Optional</sup> <a name="destinationPrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.destinationPrefixListId"></a>

- *Type:* java.lang.String

The prefix list IDs for an AWS service.

This is the AWS service to access through a VPC endpoint from instances associated with the security group.
You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_egress#destination_prefix_list_id Ec2SecurityGroupEgress#destination_prefix_list_id}

---

##### `destinationSecurityGroupId`<sup>Optional</sup> <a name="destinationSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.destinationSecurityGroupId"></a>

- *Type:* java.lang.String

The ID of the security group.  You must specify exactly one of the following: ``CidrIp``, ``CidrIpv6``, ``DestinationPrefixListId``, or ``DestinationSecurityGroupId``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_egress#destination_security_group_id Ec2SecurityGroupEgress#destination_security_group_id}

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.fromPort"></a>

- *Type:* java.lang.Number

If the protocol is TCP or UDP, this is the start of the port range.

If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_egress#from_port Ec2SecurityGroupEgress#from_port}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.toPort"></a>

- *Type:* java.lang.Number

If the protocol is TCP or UDP, this is the end of the port range.

If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes). If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_egress#to_port Ec2SecurityGroupEgress#to_port}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetCidrIp">resetCidrIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetCidrIpv6">resetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetDestinationPrefixListId">resetDestinationPrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetDestinationSecurityGroupId">resetDestinationSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCidrIp` <a name="resetCidrIp" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetCidrIp"></a>

```java
public void resetCidrIp()
```

##### `resetCidrIpv6` <a name="resetCidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetCidrIpv6"></a>

```java
public void resetCidrIpv6()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDestinationPrefixListId` <a name="resetDestinationPrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetDestinationPrefixListId"></a>

```java
public void resetDestinationPrefixListId()
```

##### `resetDestinationSecurityGroupId` <a name="resetDestinationSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetDestinationSecurityGroupId"></a>

```java
public void resetDestinationSecurityGroupId()
```

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetFromPort"></a>

```java
public void resetFromPort()
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetToPort"></a>

```java
public void resetToPort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2SecurityGroupEgress resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group_egress.Ec2SecurityGroupEgress;

Ec2SecurityGroupEgress.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group_egress.Ec2SecurityGroupEgress;

Ec2SecurityGroupEgress.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group_egress.Ec2SecurityGroupEgress;

Ec2SecurityGroupEgress.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group_egress.Ec2SecurityGroupEgress;

Ec2SecurityGroupEgress.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2SecurityGroupEgress.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2SecurityGroupEgress resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2SecurityGroupEgress to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2SecurityGroupEgress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_egress#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SecurityGroupEgress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.securityGroupEgressId">securityGroupEgressId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIpInput">cidrIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIpv6Input">cidrIpv6Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationPrefixListIdInput">destinationPrefixListIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationSecurityGroupIdInput">destinationSecurityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.fromPortInput">fromPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.ipProtocolInput">ipProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.toPortInput">toPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIp">cidrIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIpv6">cidrIpv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationPrefixListId">destinationPrefixListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationSecurityGroupId">destinationSecurityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `securityGroupEgressId`<sup>Required</sup> <a name="securityGroupEgressId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.securityGroupEgressId"></a>

```java
public java.lang.String getSecurityGroupEgressId();
```

- *Type:* java.lang.String

---

##### `cidrIpInput`<sup>Optional</sup> <a name="cidrIpInput" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIpInput"></a>

```java
public java.lang.String getCidrIpInput();
```

- *Type:* java.lang.String

---

##### `cidrIpv6Input`<sup>Optional</sup> <a name="cidrIpv6Input" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIpv6Input"></a>

```java
public java.lang.String getCidrIpv6Input();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationPrefixListIdInput`<sup>Optional</sup> <a name="destinationPrefixListIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationPrefixListIdInput"></a>

```java
public java.lang.String getDestinationPrefixListIdInput();
```

- *Type:* java.lang.String

---

##### `destinationSecurityGroupIdInput`<sup>Optional</sup> <a name="destinationSecurityGroupIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationSecurityGroupIdInput"></a>

```java
public java.lang.String getDestinationSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.fromPortInput"></a>

```java
public java.lang.Number getFromPortInput();
```

- *Type:* java.lang.Number

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.ipProtocolInput"></a>

```java
public java.lang.String getIpProtocolInput();
```

- *Type:* java.lang.String

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.toPortInput"></a>

```java
public java.lang.Number getToPortInput();
```

- *Type:* java.lang.Number

---

##### `cidrIp`<sup>Required</sup> <a name="cidrIp" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIp"></a>

```java
public java.lang.String getCidrIp();
```

- *Type:* java.lang.String

---

##### `cidrIpv6`<sup>Required</sup> <a name="cidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIpv6"></a>

```java
public java.lang.String getCidrIpv6();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destinationPrefixListId`<sup>Required</sup> <a name="destinationPrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationPrefixListId"></a>

```java
public java.lang.String getDestinationPrefixListId();
```

- *Type:* java.lang.String

---

##### `destinationSecurityGroupId`<sup>Required</sup> <a name="destinationSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationSecurityGroupId"></a>

```java
public java.lang.String getDestinationSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SecurityGroupEgressConfig <a name="Ec2SecurityGroupEgressConfig" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_security_group_egress.Ec2SecurityGroupEgressConfig;

Ec2SecurityGroupEgressConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .groupId(java.lang.String)
    .ipProtocol(java.lang.String)
//  .cidrIp(java.lang.String)
//  .cidrIpv6(java.lang.String)
//  .description(java.lang.String)
//  .destinationPrefixListId(java.lang.String)
//  .destinationSecurityGroupId(java.lang.String)
//  .fromPort(java.lang.Number)
//  .toPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.groupId">groupId</a></code> | <code>java.lang.String</code> | The ID of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | The IP protocol name (``tcp``, ``udp``, ``icmp``, ``icmpv6``) or number (see [Protocol Numbers](https://docs.aws.amazon.com/http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)).  Use ``-1`` to specify all protocols. When authorizing security group rules, specifying ``-1`` or a protocol number other than ``tcp``, ``udp``, ``icmp``, or ``icmpv6`` allows traffic on all ports, regardless of any port range you specify. For ``tcp``, ``udp``, and ``icmp``, you must specify a port range. For ``icmpv6``, the port range is optional; if you omit the port range, traffic for all types and codes is allowed. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.cidrIp">cidrIp</a></code> | <code>java.lang.String</code> | The IPv4 address range, in CIDR format. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.cidrIpv6">cidrIpv6</a></code> | <code>java.lang.String</code> | The IPv6 address range, in CIDR format. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of an egress (outbound) security group rule. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.destinationPrefixListId">destinationPrefixListId</a></code> | <code>java.lang.String</code> | The prefix list IDs for an AWS service. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.destinationSecurityGroupId">destinationSecurityGroupId</a></code> | <code>java.lang.String</code> | The ID of the security group.  You must specify exactly one of the following: ``CidrIp``, ``CidrIpv6``, ``DestinationPrefixListId``, or ``DestinationSecurityGroupId``. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | If the protocol is TCP or UDP, this is the start of the port range. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | If the protocol is TCP or UDP, this is the end of the port range. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

The ID of the security group.

You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_egress#group_id Ec2SecurityGroupEgress#group_id}

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

The IP protocol name (``tcp``, ``udp``, ``icmp``, ``icmpv6``) or number (see [Protocol Numbers](https://docs.aws.amazon.com/http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)).  Use ``-1`` to specify all protocols. When authorizing security group rules, specifying ``-1`` or a protocol number other than ``tcp``, ``udp``, ``icmp``, or ``icmpv6`` allows traffic on all ports, regardless of any port range you specify. For ``tcp``, ``udp``, and ``icmp``, you must specify a port range. For ``icmpv6``, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_egress#ip_protocol Ec2SecurityGroupEgress#ip_protocol}

---

##### `cidrIp`<sup>Optional</sup> <a name="cidrIp" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.cidrIp"></a>

```java
public java.lang.String getCidrIp();
```

- *Type:* java.lang.String

The IPv4 address range, in CIDR format.

You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.
For examples of rules that you can add to security groups for specific access scenarios, see [Security group rules for different use cases](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_egress#cidr_ip Ec2SecurityGroupEgress#cidr_ip}

---

##### `cidrIpv6`<sup>Optional</sup> <a name="cidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.cidrIpv6"></a>

```java
public java.lang.String getCidrIpv6();
```

- *Type:* java.lang.String

The IPv6 address range, in CIDR format.

You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.
For examples of rules that you can add to security groups for specific access scenarios, see [Security group rules for different use cases](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_egress#cidr_ipv_6 Ec2SecurityGroupEgress#cidr_ipv_6}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of an egress (outbound) security group rule.

Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=;{}!$*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_egress#description Ec2SecurityGroupEgress#description}

---

##### `destinationPrefixListId`<sup>Optional</sup> <a name="destinationPrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.destinationPrefixListId"></a>

```java
public java.lang.String getDestinationPrefixListId();
```

- *Type:* java.lang.String

The prefix list IDs for an AWS service.

This is the AWS service to access through a VPC endpoint from instances associated with the security group.
You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_egress#destination_prefix_list_id Ec2SecurityGroupEgress#destination_prefix_list_id}

---

##### `destinationSecurityGroupId`<sup>Optional</sup> <a name="destinationSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.destinationSecurityGroupId"></a>

```java
public java.lang.String getDestinationSecurityGroupId();
```

- *Type:* java.lang.String

The ID of the security group.  You must specify exactly one of the following: ``CidrIp``, ``CidrIpv6``, ``DestinationPrefixListId``, or ``DestinationSecurityGroupId``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_egress#destination_security_group_id Ec2SecurityGroupEgress#destination_security_group_id}

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

If the protocol is TCP or UDP, this is the start of the port range.

If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_egress#from_port Ec2SecurityGroupEgress#from_port}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

If the protocol is TCP or UDP, this is the end of the port range.

If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes). If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_egress#to_port Ec2SecurityGroupEgress#to_port}

---



