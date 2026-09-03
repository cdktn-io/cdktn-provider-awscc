# `directoryserviceSimpleAd` Submodule <a name="`directoryserviceSimpleAd` Submodule" id="@cdktn/provider-awscc.directoryserviceSimpleAd"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryserviceSimpleAd <a name="DirectoryserviceSimpleAd" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad awscc_directoryservice_simple_ad}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer"></a>

```java
import io.cdktn.providers.awscc.directoryservice_simple_ad.DirectoryserviceSimpleAd;

DirectoryserviceSimpleAd.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .size(java.lang.String)
    .vpcSettings(DirectoryserviceSimpleAdVpcSettings)
//  .createAlias(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .enableSso(java.lang.Boolean|IResolvable)
//  .password(java.lang.String)
//  .shortName(java.lang.String)
//  .tags(IResolvable|java.util.List<DirectoryserviceSimpleAdTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The fully qualified domain name for the AWS Managed Simple AD directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.size">size</a></code> | <code>java.lang.String</code> | The size of the directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a></code> | VPC settings of the Simple AD directory server in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.createAlias">createAlias</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The name of the configuration set. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description for the directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.enableSso">enableSso</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable single sign-on for a Simple Active Directory in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The password for the default administrative user named Admin. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.shortName">shortName</a></code> | <code>java.lang.String</code> | The NetBIOS name for your domain. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#tags DirectoryserviceSimpleAd#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The fully qualified domain name for the AWS Managed Simple AD directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#name DirectoryserviceSimpleAd#name}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.size"></a>

- *Type:* java.lang.String

The size of the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#size DirectoryserviceSimpleAd#size}

---

##### `vpcSettings`<sup>Required</sup> <a name="vpcSettings" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.vpcSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a>

VPC settings of the Simple AD directory server in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#vpc_settings DirectoryserviceSimpleAd#vpc_settings}

---

##### `createAlias`<sup>Optional</sup> <a name="createAlias" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.createAlias"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The name of the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#create_alias DirectoryserviceSimpleAd#create_alias}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description for the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#description DirectoryserviceSimpleAd#description}

---

##### `enableSso`<sup>Optional</sup> <a name="enableSso" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.enableSso"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable single sign-on for a Simple Active Directory in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#enable_sso DirectoryserviceSimpleAd#enable_sso}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The password for the default administrative user named Admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#password DirectoryserviceSimpleAd#password}

---

##### `shortName`<sup>Optional</sup> <a name="shortName" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.shortName"></a>

- *Type:* java.lang.String

The NetBIOS name for your domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#short_name DirectoryserviceSimpleAd#short_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#tags DirectoryserviceSimpleAd#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putVpcSettings">putVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetCreateAlias">resetCreateAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetEnableSso">resetEnableSso</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetShortName">resetShortName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DirectoryserviceSimpleAdTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>>

---

##### `putVpcSettings` <a name="putVpcSettings" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putVpcSettings"></a>

```java
public void putVpcSettings(DirectoryserviceSimpleAdVpcSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putVpcSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a>

---

##### `resetCreateAlias` <a name="resetCreateAlias" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetCreateAlias"></a>

```java
public void resetCreateAlias()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnableSso` <a name="resetEnableSso" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetEnableSso"></a>

```java
public void resetEnableSso()
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetShortName` <a name="resetShortName" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetShortName"></a>

```java
public void resetShortName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectoryserviceSimpleAd resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isConstruct"></a>

```java
import io.cdktn.providers.awscc.directoryservice_simple_ad.DirectoryserviceSimpleAd;

DirectoryserviceSimpleAd.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.directoryservice_simple_ad.DirectoryserviceSimpleAd;

DirectoryserviceSimpleAd.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.directoryservice_simple_ad.DirectoryserviceSimpleAd;

DirectoryserviceSimpleAd.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.directoryservice_simple_ad.DirectoryserviceSimpleAd;

DirectoryserviceSimpleAd.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DirectoryserviceSimpleAd.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DirectoryserviceSimpleAd resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DirectoryserviceSimpleAd to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DirectoryserviceSimpleAd that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryserviceSimpleAd to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.dnsIpAddresses">dnsIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList">DirectoryserviceSimpleAdTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference">DirectoryserviceSimpleAdVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.createAliasInput">createAliasInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.enableSsoInput">enableSsoInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.shortNameInput">shortNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.sizeInput">sizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.vpcSettingsInput">vpcSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.createAlias">createAlias</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.enableSso">enableSso</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.shortName">shortName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.size">size</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `dnsIpAddresses`<sup>Required</sup> <a name="dnsIpAddresses" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.dnsIpAddresses"></a>

```java
public java.util.List<java.lang.String> getDnsIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tags"></a>

```java
public DirectoryserviceSimpleAdTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList">DirectoryserviceSimpleAdTagsList</a>

---

##### `vpcSettings`<sup>Required</sup> <a name="vpcSettings" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.vpcSettings"></a>

```java
public DirectoryserviceSimpleAdVpcSettingsOutputReference getVpcSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference">DirectoryserviceSimpleAdVpcSettingsOutputReference</a>

---

##### `createAliasInput`<sup>Optional</sup> <a name="createAliasInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.createAliasInput"></a>

```java
public java.lang.Boolean|IResolvable getCreateAliasInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enableSsoInput`<sup>Optional</sup> <a name="enableSsoInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.enableSsoInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableSsoInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `shortNameInput`<sup>Optional</sup> <a name="shortNameInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.shortNameInput"></a>

```java
public java.lang.String getShortNameInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.sizeInput"></a>

```java
public java.lang.String getSizeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DirectoryserviceSimpleAdTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>>

---

##### `vpcSettingsInput`<sup>Optional</sup> <a name="vpcSettingsInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.vpcSettingsInput"></a>

```java
public IResolvable|DirectoryserviceSimpleAdVpcSettings getVpcSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a>

---

##### `createAlias`<sup>Required</sup> <a name="createAlias" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.createAlias"></a>

```java
public java.lang.Boolean|IResolvable getCreateAlias();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enableSso`<sup>Required</sup> <a name="enableSso" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.enableSso"></a>

```java
public java.lang.Boolean|IResolvable getEnableSso();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.shortName"></a>

```java
public java.lang.String getShortName();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryserviceSimpleAdConfig <a name="DirectoryserviceSimpleAdConfig" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.directoryservice_simple_ad.DirectoryserviceSimpleAdConfig;

DirectoryserviceSimpleAdConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .size(java.lang.String)
    .vpcSettings(DirectoryserviceSimpleAdVpcSettings)
//  .createAlias(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .enableSso(java.lang.Boolean|IResolvable)
//  .password(java.lang.String)
//  .shortName(java.lang.String)
//  .tags(IResolvable|java.util.List<DirectoryserviceSimpleAdTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.name">name</a></code> | <code>java.lang.String</code> | The fully qualified domain name for the AWS Managed Simple AD directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.size">size</a></code> | <code>java.lang.String</code> | The size of the directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a></code> | VPC settings of the Simple AD directory server in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.createAlias">createAlias</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The name of the configuration set. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description for the directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.enableSso">enableSso</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable single sign-on for a Simple Active Directory in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.password">password</a></code> | <code>java.lang.String</code> | The password for the default administrative user named Admin. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.shortName">shortName</a></code> | <code>java.lang.String</code> | The NetBIOS name for your domain. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#tags DirectoryserviceSimpleAd#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The fully qualified domain name for the AWS Managed Simple AD directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#name DirectoryserviceSimpleAd#name}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

The size of the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#size DirectoryserviceSimpleAd#size}

---

##### `vpcSettings`<sup>Required</sup> <a name="vpcSettings" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.vpcSettings"></a>

```java
public DirectoryserviceSimpleAdVpcSettings getVpcSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a>

VPC settings of the Simple AD directory server in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#vpc_settings DirectoryserviceSimpleAd#vpc_settings}

---

##### `createAlias`<sup>Optional</sup> <a name="createAlias" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.createAlias"></a>

```java
public java.lang.Boolean|IResolvable getCreateAlias();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The name of the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#create_alias DirectoryserviceSimpleAd#create_alias}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description for the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#description DirectoryserviceSimpleAd#description}

---

##### `enableSso`<sup>Optional</sup> <a name="enableSso" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.enableSso"></a>

```java
public java.lang.Boolean|IResolvable getEnableSso();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable single sign-on for a Simple Active Directory in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#enable_sso DirectoryserviceSimpleAd#enable_sso}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password for the default administrative user named Admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#password DirectoryserviceSimpleAd#password}

---

##### `shortName`<sup>Optional</sup> <a name="shortName" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.shortName"></a>

```java
public java.lang.String getShortName();
```

- *Type:* java.lang.String

The NetBIOS name for your domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#short_name DirectoryserviceSimpleAd#short_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DirectoryserviceSimpleAdTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#tags DirectoryserviceSimpleAd#tags}.

---

### DirectoryserviceSimpleAdTags <a name="DirectoryserviceSimpleAdTags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.directoryservice_simple_ad.DirectoryserviceSimpleAdTags;

DirectoryserviceSimpleAdTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#key DirectoryserviceSimpleAd#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#value DirectoryserviceSimpleAd#value}

---

### DirectoryserviceSimpleAdVpcSettings <a name="DirectoryserviceSimpleAdVpcSettings" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.directoryservice_simple_ad.DirectoryserviceSimpleAdVpcSettings;

DirectoryserviceSimpleAdVpcSettings.builder()
    .subnetIds(java.util.List<java.lang.String>)
    .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | The identifiers of the subnets for the directory servers. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The identifier of the VPC in which to create the directory. |

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

The identifiers of the subnets for the directory servers.

The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#subnet_ids DirectoryserviceSimpleAd#subnet_ids}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

The identifier of the VPC in which to create the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directoryservice_simple_ad#vpc_id DirectoryserviceSimpleAd#vpc_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryserviceSimpleAdTagsList <a name="DirectoryserviceSimpleAdTagsList" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.directoryservice_simple_ad.DirectoryserviceSimpleAdTagsList;

new DirectoryserviceSimpleAdTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.get"></a>

```java
public DirectoryserviceSimpleAdTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DirectoryserviceSimpleAdTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>>

---


### DirectoryserviceSimpleAdTagsOutputReference <a name="DirectoryserviceSimpleAdTagsOutputReference" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.directoryservice_simple_ad.DirectoryserviceSimpleAdTagsOutputReference;

new DirectoryserviceSimpleAdTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DirectoryserviceSimpleAdTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>

---


### DirectoryserviceSimpleAdVpcSettingsOutputReference <a name="DirectoryserviceSimpleAdVpcSettingsOutputReference" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.directoryservice_simple_ad.DirectoryserviceSimpleAdVpcSettingsOutputReference;

new DirectoryserviceSimpleAdVpcSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DirectoryserviceSimpleAdVpcSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a>

---



