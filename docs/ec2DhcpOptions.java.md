# `ec2DhcpOptions` Submodule <a name="`ec2DhcpOptions` Submodule" id="@cdktn/provider-awscc.ec2DhcpOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2DhcpOptions <a name="Ec2DhcpOptions" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_dhcp_options awscc_ec2_dhcp_options}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_dhcp_options.Ec2DhcpOptions;

Ec2DhcpOptions.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .domainName(java.lang.String)
//  .domainNameServers(java.util.List<java.lang.String>)
//  .ipv6AddressPreferredLeaseTime(java.lang.Number)
//  .netbiosNameServers(java.util.List<java.lang.String>)
//  .netbiosNodeType(java.lang.Number)
//  .ntpServers(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<Ec2DhcpOptionsTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | This value is used to complete unqualified DNS hostnames. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.domainNameServers">domainNameServers</a></code> | <code>java.util.List<java.lang.String></code> | The IPv4 addresses of up to four domain name servers, or AmazonProvidedDNS. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.ipv6AddressPreferredLeaseTime">ipv6AddressPreferredLeaseTime</a></code> | <code>java.lang.Number</code> | The preferred Lease Time for ipV6 address in seconds. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.netbiosNameServers">netbiosNameServers</a></code> | <code>java.util.List<java.lang.String></code> | The IPv4 addresses of up to four NetBIOS name servers. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.netbiosNodeType">netbiosNodeType</a></code> | <code>java.lang.Number</code> | The NetBIOS node type (1, 2, 4, or 8). |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.ntpServers">ntpServers</a></code> | <code>java.util.List<java.lang.String></code> | The IPv4 addresses of up to four Network Time Protocol (NTP) servers. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>></code> | Any tags assigned to the DHCP options set. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

This value is used to complete unqualified DNS hostnames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_dhcp_options#domain_name Ec2DhcpOptions#domain_name}

---

##### `domainNameServers`<sup>Optional</sup> <a name="domainNameServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.domainNameServers"></a>

- *Type:* java.util.List<java.lang.String>

The IPv4 addresses of up to four domain name servers, or AmazonProvidedDNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_dhcp_options#domain_name_servers Ec2DhcpOptions#domain_name_servers}

---

##### `ipv6AddressPreferredLeaseTime`<sup>Optional</sup> <a name="ipv6AddressPreferredLeaseTime" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.ipv6AddressPreferredLeaseTime"></a>

- *Type:* java.lang.Number

The preferred Lease Time for ipV6 address in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_dhcp_options#ipv_6_address_preferred_lease_time Ec2DhcpOptions#ipv_6_address_preferred_lease_time}

---

##### `netbiosNameServers`<sup>Optional</sup> <a name="netbiosNameServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.netbiosNameServers"></a>

- *Type:* java.util.List<java.lang.String>

The IPv4 addresses of up to four NetBIOS name servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_dhcp_options#netbios_name_servers Ec2DhcpOptions#netbios_name_servers}

---

##### `netbiosNodeType`<sup>Optional</sup> <a name="netbiosNodeType" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.netbiosNodeType"></a>

- *Type:* java.lang.Number

The NetBIOS node type (1, 2, 4, or 8).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_dhcp_options#netbios_node_type Ec2DhcpOptions#netbios_node_type}

---

##### `ntpServers`<sup>Optional</sup> <a name="ntpServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.ntpServers"></a>

- *Type:* java.util.List<java.lang.String>

The IPv4 addresses of up to four Network Time Protocol (NTP) servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_dhcp_options#ntp_servers Ec2DhcpOptions#ntp_servers}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>>

Any tags assigned to the DHCP options set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_dhcp_options#tags Ec2DhcpOptions#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetDomainNameServers">resetDomainNameServers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetIpv6AddressPreferredLeaseTime">resetIpv6AddressPreferredLeaseTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetNetbiosNameServers">resetNetbiosNameServers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetNetbiosNodeType">resetNetbiosNodeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetNtpServers">resetNtpServers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2DhcpOptionsTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>>

---

##### `resetDomainName` <a name="resetDomainName" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetDomainName"></a>

```java
public void resetDomainName()
```

##### `resetDomainNameServers` <a name="resetDomainNameServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetDomainNameServers"></a>

```java
public void resetDomainNameServers()
```

##### `resetIpv6AddressPreferredLeaseTime` <a name="resetIpv6AddressPreferredLeaseTime" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetIpv6AddressPreferredLeaseTime"></a>

```java
public void resetIpv6AddressPreferredLeaseTime()
```

##### `resetNetbiosNameServers` <a name="resetNetbiosNameServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetNetbiosNameServers"></a>

```java
public void resetNetbiosNameServers()
```

##### `resetNetbiosNodeType` <a name="resetNetbiosNodeType" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetNetbiosNodeType"></a>

```java
public void resetNetbiosNodeType()
```

##### `resetNtpServers` <a name="resetNtpServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetNtpServers"></a>

```java
public void resetNtpServers()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2DhcpOptions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_dhcp_options.Ec2DhcpOptions;

Ec2DhcpOptions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_dhcp_options.Ec2DhcpOptions;

Ec2DhcpOptions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_dhcp_options.Ec2DhcpOptions;

Ec2DhcpOptions.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_dhcp_options.Ec2DhcpOptions;

Ec2DhcpOptions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2DhcpOptions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2DhcpOptions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2DhcpOptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2DhcpOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_dhcp_options#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2DhcpOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.dhcpOptionsId">dhcpOptionsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList">Ec2DhcpOptionsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainNameServersInput">domainNameServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ipv6AddressPreferredLeaseTimeInput">ipv6AddressPreferredLeaseTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNameServersInput">netbiosNameServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNodeTypeInput">netbiosNodeTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ntpServersInput">ntpServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainNameServers">domainNameServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ipv6AddressPreferredLeaseTime">ipv6AddressPreferredLeaseTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNameServers">netbiosNameServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNodeType">netbiosNodeType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ntpServers">ntpServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dhcpOptionsId`<sup>Required</sup> <a name="dhcpOptionsId" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.dhcpOptionsId"></a>

```java
public java.lang.String getDhcpOptionsId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.tags"></a>

```java
public Ec2DhcpOptionsTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList">Ec2DhcpOptionsTagsList</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `domainNameServersInput`<sup>Optional</sup> <a name="domainNameServersInput" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainNameServersInput"></a>

```java
public java.util.List<java.lang.String> getDomainNameServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6AddressPreferredLeaseTimeInput`<sup>Optional</sup> <a name="ipv6AddressPreferredLeaseTimeInput" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ipv6AddressPreferredLeaseTimeInput"></a>

```java
public java.lang.Number getIpv6AddressPreferredLeaseTimeInput();
```

- *Type:* java.lang.Number

---

##### `netbiosNameServersInput`<sup>Optional</sup> <a name="netbiosNameServersInput" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNameServersInput"></a>

```java
public java.util.List<java.lang.String> getNetbiosNameServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `netbiosNodeTypeInput`<sup>Optional</sup> <a name="netbiosNodeTypeInput" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNodeTypeInput"></a>

```java
public java.lang.Number getNetbiosNodeTypeInput();
```

- *Type:* java.lang.Number

---

##### `ntpServersInput`<sup>Optional</sup> <a name="ntpServersInput" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ntpServersInput"></a>

```java
public java.util.List<java.lang.String> getNtpServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2DhcpOptionsTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `domainNameServers`<sup>Required</sup> <a name="domainNameServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainNameServers"></a>

```java
public java.util.List<java.lang.String> getDomainNameServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6AddressPreferredLeaseTime`<sup>Required</sup> <a name="ipv6AddressPreferredLeaseTime" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ipv6AddressPreferredLeaseTime"></a>

```java
public java.lang.Number getIpv6AddressPreferredLeaseTime();
```

- *Type:* java.lang.Number

---

##### `netbiosNameServers`<sup>Required</sup> <a name="netbiosNameServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNameServers"></a>

```java
public java.util.List<java.lang.String> getNetbiosNameServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `netbiosNodeType`<sup>Required</sup> <a name="netbiosNodeType" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNodeType"></a>

```java
public java.lang.Number getNetbiosNodeType();
```

- *Type:* java.lang.Number

---

##### `ntpServers`<sup>Required</sup> <a name="ntpServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ntpServers"></a>

```java
public java.util.List<java.lang.String> getNtpServers();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2DhcpOptionsConfig <a name="Ec2DhcpOptionsConfig" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_dhcp_options.Ec2DhcpOptionsConfig;

Ec2DhcpOptionsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .domainName(java.lang.String)
//  .domainNameServers(java.util.List<java.lang.String>)
//  .ipv6AddressPreferredLeaseTime(java.lang.Number)
//  .netbiosNameServers(java.util.List<java.lang.String>)
//  .netbiosNodeType(java.lang.Number)
//  .ntpServers(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<Ec2DhcpOptionsTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | This value is used to complete unqualified DNS hostnames. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.domainNameServers">domainNameServers</a></code> | <code>java.util.List<java.lang.String></code> | The IPv4 addresses of up to four domain name servers, or AmazonProvidedDNS. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.ipv6AddressPreferredLeaseTime">ipv6AddressPreferredLeaseTime</a></code> | <code>java.lang.Number</code> | The preferred Lease Time for ipV6 address in seconds. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.netbiosNameServers">netbiosNameServers</a></code> | <code>java.util.List<java.lang.String></code> | The IPv4 addresses of up to four NetBIOS name servers. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.netbiosNodeType">netbiosNodeType</a></code> | <code>java.lang.Number</code> | The NetBIOS node type (1, 2, 4, or 8). |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.ntpServers">ntpServers</a></code> | <code>java.util.List<java.lang.String></code> | The IPv4 addresses of up to four Network Time Protocol (NTP) servers. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>></code> | Any tags assigned to the DHCP options set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

This value is used to complete unqualified DNS hostnames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_dhcp_options#domain_name Ec2DhcpOptions#domain_name}

---

##### `domainNameServers`<sup>Optional</sup> <a name="domainNameServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.domainNameServers"></a>

```java
public java.util.List<java.lang.String> getDomainNameServers();
```

- *Type:* java.util.List<java.lang.String>

The IPv4 addresses of up to four domain name servers, or AmazonProvidedDNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_dhcp_options#domain_name_servers Ec2DhcpOptions#domain_name_servers}

---

##### `ipv6AddressPreferredLeaseTime`<sup>Optional</sup> <a name="ipv6AddressPreferredLeaseTime" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.ipv6AddressPreferredLeaseTime"></a>

```java
public java.lang.Number getIpv6AddressPreferredLeaseTime();
```

- *Type:* java.lang.Number

The preferred Lease Time for ipV6 address in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_dhcp_options#ipv_6_address_preferred_lease_time Ec2DhcpOptions#ipv_6_address_preferred_lease_time}

---

##### `netbiosNameServers`<sup>Optional</sup> <a name="netbiosNameServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.netbiosNameServers"></a>

```java
public java.util.List<java.lang.String> getNetbiosNameServers();
```

- *Type:* java.util.List<java.lang.String>

The IPv4 addresses of up to four NetBIOS name servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_dhcp_options#netbios_name_servers Ec2DhcpOptions#netbios_name_servers}

---

##### `netbiosNodeType`<sup>Optional</sup> <a name="netbiosNodeType" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.netbiosNodeType"></a>

```java
public java.lang.Number getNetbiosNodeType();
```

- *Type:* java.lang.Number

The NetBIOS node type (1, 2, 4, or 8).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_dhcp_options#netbios_node_type Ec2DhcpOptions#netbios_node_type}

---

##### `ntpServers`<sup>Optional</sup> <a name="ntpServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.ntpServers"></a>

```java
public java.util.List<java.lang.String> getNtpServers();
```

- *Type:* java.util.List<java.lang.String>

The IPv4 addresses of up to four Network Time Protocol (NTP) servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_dhcp_options#ntp_servers Ec2DhcpOptions#ntp_servers}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2DhcpOptionsTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>>

Any tags assigned to the DHCP options set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_dhcp_options#tags Ec2DhcpOptions#tags}

---

### Ec2DhcpOptionsTags <a name="Ec2DhcpOptionsTags" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_dhcp_options.Ec2DhcpOptionsTags;

Ec2DhcpOptionsTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_dhcp_options#key Ec2DhcpOptions#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_dhcp_options#value Ec2DhcpOptions#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_dhcp_options#key Ec2DhcpOptions#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_dhcp_options#value Ec2DhcpOptions#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2DhcpOptionsTagsList <a name="Ec2DhcpOptionsTagsList" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_dhcp_options.Ec2DhcpOptionsTagsList;

new Ec2DhcpOptionsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.get"></a>

```java
public Ec2DhcpOptionsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2DhcpOptionsTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>>

---


### Ec2DhcpOptionsTagsOutputReference <a name="Ec2DhcpOptionsTagsOutputReference" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_dhcp_options.Ec2DhcpOptionsTagsOutputReference;

new Ec2DhcpOptionsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2DhcpOptionsTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>

---



