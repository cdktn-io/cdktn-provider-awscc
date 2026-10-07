# `directoryserviceMicrosoftAd` Submodule <a name="`directoryserviceMicrosoftAd` Submodule" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryserviceMicrosoftAd <a name="DirectoryserviceMicrosoftAd" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad awscc_directoryservice_microsoft_ad}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer"></a>

```java
import io.cdktn.providers.awscc.directoryservice_microsoft_ad.DirectoryserviceMicrosoftAd;

DirectoryserviceMicrosoftAd.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .vpcSettings(DirectoryserviceMicrosoftAdVpcSettings)
//  .createAlias(java.lang.Boolean|IResolvable)
//  .edition(java.lang.String)
//  .enableSso(java.lang.Boolean|IResolvable)
//  .password(java.lang.String)
//  .shortName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The fully qualified domain name for the AWS Managed Microsoft AD directory, such as corp.example.com. This name will resolve inside your VPC only. It does not need to be publicly resolvable. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a></code> | Specifies the VPC settings of the Microsoft AD directory server in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.createAlias">createAlias</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies an alias for a directory and assigns the alias to the directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.edition">edition</a></code> | <code>java.lang.String</code> | AWS Managed Microsoft AD is available in two editions: Standard and Enterprise. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.enableSso">enableSso</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable single sign-on for a Microsoft Active Directory in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The password for the default administrative user named Admin. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.shortName">shortName</a></code> | <code>java.lang.String</code> | The NetBIOS name for your domain, such as CORP. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The fully qualified domain name for the AWS Managed Microsoft AD directory, such as corp.example.com. This name will resolve inside your VPC only. It does not need to be publicly resolvable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#name DirectoryserviceMicrosoftAd#name}

---

##### `vpcSettings`<sup>Required</sup> <a name="vpcSettings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.vpcSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a>

Specifies the VPC settings of the Microsoft AD directory server in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#vpc_settings DirectoryserviceMicrosoftAd#vpc_settings}

---

##### `createAlias`<sup>Optional</sup> <a name="createAlias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.createAlias"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies an alias for a directory and assigns the alias to the directory.

The alias is used to construct the access URL for the directory, such as http://<alias>.awsapps.com. By default, AWS CloudFormation does not create an alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#create_alias DirectoryserviceMicrosoftAd#create_alias}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.edition"></a>

- *Type:* java.lang.String

AWS Managed Microsoft AD is available in two editions: Standard and Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#edition DirectoryserviceMicrosoftAd#edition}

---

##### `enableSso`<sup>Optional</sup> <a name="enableSso" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.enableSso"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable single sign-on for a Microsoft Active Directory in AWS.

Single sign-on allows users in your directory to access certain AWS services from a computer joined to the directory without having to enter their credentials separately. If you don't specify a value, AWS CloudFormation disables single sign-on by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#enable_sso DirectoryserviceMicrosoftAd#enable_sso}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The password for the default administrative user named Admin.

If you need to change the password for the administrator account, see the ResetUserPassword API call in the AWS Directory Service API Reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#password DirectoryserviceMicrosoftAd#password}

---

##### `shortName`<sup>Optional</sup> <a name="shortName" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.shortName"></a>

- *Type:* java.lang.String

The NetBIOS name for your domain, such as CORP.

If you don't specify a NetBIOS name, it will default to the first part of your directory DNS. For example, CORP for the directory DNS corp.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#short_name DirectoryserviceMicrosoftAd#short_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.putVpcSettings">putVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetCreateAlias">resetCreateAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetEnableSso">resetEnableSso</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetShortName">resetShortName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putVpcSettings` <a name="putVpcSettings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.putVpcSettings"></a>

```java
public void putVpcSettings(DirectoryserviceMicrosoftAdVpcSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.putVpcSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a>

---

##### `resetCreateAlias` <a name="resetCreateAlias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetCreateAlias"></a>

```java
public void resetCreateAlias()
```

##### `resetEdition` <a name="resetEdition" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetEdition"></a>

```java
public void resetEdition()
```

##### `resetEnableSso` <a name="resetEnableSso" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetEnableSso"></a>

```java
public void resetEnableSso()
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetShortName` <a name="resetShortName" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetShortName"></a>

```java
public void resetShortName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectoryserviceMicrosoftAd resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isConstruct"></a>

```java
import io.cdktn.providers.awscc.directoryservice_microsoft_ad.DirectoryserviceMicrosoftAd;

DirectoryserviceMicrosoftAd.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.directoryservice_microsoft_ad.DirectoryserviceMicrosoftAd;

DirectoryserviceMicrosoftAd.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.directoryservice_microsoft_ad.DirectoryserviceMicrosoftAd;

DirectoryserviceMicrosoftAd.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.directoryservice_microsoft_ad.DirectoryserviceMicrosoftAd;

DirectoryserviceMicrosoftAd.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DirectoryserviceMicrosoftAd.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DirectoryserviceMicrosoftAd resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DirectoryserviceMicrosoftAd to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DirectoryserviceMicrosoftAd that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryserviceMicrosoftAd to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.dnsIpAddresses">dnsIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference">DirectoryserviceMicrosoftAdVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.createAliasInput">createAliasInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.editionInput">editionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.enableSsoInput">enableSsoInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.shortNameInput">shortNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.vpcSettingsInput">vpcSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.createAlias">createAlias</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.edition">edition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.enableSso">enableSso</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.shortName">shortName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `dnsIpAddresses`<sup>Required</sup> <a name="dnsIpAddresses" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.dnsIpAddresses"></a>

```java
public java.util.List<java.lang.String> getDnsIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `vpcSettings`<sup>Required</sup> <a name="vpcSettings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.vpcSettings"></a>

```java
public DirectoryserviceMicrosoftAdVpcSettingsOutputReference getVpcSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference">DirectoryserviceMicrosoftAdVpcSettingsOutputReference</a>

---

##### `createAliasInput`<sup>Optional</sup> <a name="createAliasInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.createAliasInput"></a>

```java
public java.lang.Boolean|IResolvable getCreateAliasInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.editionInput"></a>

```java
public java.lang.String getEditionInput();
```

- *Type:* java.lang.String

---

##### `enableSsoInput`<sup>Optional</sup> <a name="enableSsoInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.enableSsoInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableSsoInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `shortNameInput`<sup>Optional</sup> <a name="shortNameInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.shortNameInput"></a>

```java
public java.lang.String getShortNameInput();
```

- *Type:* java.lang.String

---

##### `vpcSettingsInput`<sup>Optional</sup> <a name="vpcSettingsInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.vpcSettingsInput"></a>

```java
public IResolvable|DirectoryserviceMicrosoftAdVpcSettings getVpcSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a>

---

##### `createAlias`<sup>Required</sup> <a name="createAlias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.createAlias"></a>

```java
public java.lang.Boolean|IResolvable getCreateAlias();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

---

##### `enableSso`<sup>Required</sup> <a name="enableSso" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.enableSso"></a>

```java
public java.lang.Boolean|IResolvable getEnableSso();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.shortName"></a>

```java
public java.lang.String getShortName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryserviceMicrosoftAdConfig <a name="DirectoryserviceMicrosoftAdConfig" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.directoryservice_microsoft_ad.DirectoryserviceMicrosoftAdConfig;

DirectoryserviceMicrosoftAdConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .vpcSettings(DirectoryserviceMicrosoftAdVpcSettings)
//  .createAlias(java.lang.Boolean|IResolvable)
//  .edition(java.lang.String)
//  .enableSso(java.lang.Boolean|IResolvable)
//  .password(java.lang.String)
//  .shortName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.name">name</a></code> | <code>java.lang.String</code> | The fully qualified domain name for the AWS Managed Microsoft AD directory, such as corp.example.com. This name will resolve inside your VPC only. It does not need to be publicly resolvable. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a></code> | Specifies the VPC settings of the Microsoft AD directory server in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.createAlias">createAlias</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies an alias for a directory and assigns the alias to the directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.edition">edition</a></code> | <code>java.lang.String</code> | AWS Managed Microsoft AD is available in two editions: Standard and Enterprise. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.enableSso">enableSso</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable single sign-on for a Microsoft Active Directory in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.password">password</a></code> | <code>java.lang.String</code> | The password for the default administrative user named Admin. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.shortName">shortName</a></code> | <code>java.lang.String</code> | The NetBIOS name for your domain, such as CORP. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The fully qualified domain name for the AWS Managed Microsoft AD directory, such as corp.example.com. This name will resolve inside your VPC only. It does not need to be publicly resolvable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#name DirectoryserviceMicrosoftAd#name}

---

##### `vpcSettings`<sup>Required</sup> <a name="vpcSettings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.vpcSettings"></a>

```java
public DirectoryserviceMicrosoftAdVpcSettings getVpcSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a>

Specifies the VPC settings of the Microsoft AD directory server in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#vpc_settings DirectoryserviceMicrosoftAd#vpc_settings}

---

##### `createAlias`<sup>Optional</sup> <a name="createAlias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.createAlias"></a>

```java
public java.lang.Boolean|IResolvable getCreateAlias();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies an alias for a directory and assigns the alias to the directory.

The alias is used to construct the access URL for the directory, such as http://<alias>.awsapps.com. By default, AWS CloudFormation does not create an alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#create_alias DirectoryserviceMicrosoftAd#create_alias}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

AWS Managed Microsoft AD is available in two editions: Standard and Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#edition DirectoryserviceMicrosoftAd#edition}

---

##### `enableSso`<sup>Optional</sup> <a name="enableSso" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.enableSso"></a>

```java
public java.lang.Boolean|IResolvable getEnableSso();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable single sign-on for a Microsoft Active Directory in AWS.

Single sign-on allows users in your directory to access certain AWS services from a computer joined to the directory without having to enter their credentials separately. If you don't specify a value, AWS CloudFormation disables single sign-on by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#enable_sso DirectoryserviceMicrosoftAd#enable_sso}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password for the default administrative user named Admin.

If you need to change the password for the administrator account, see the ResetUserPassword API call in the AWS Directory Service API Reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#password DirectoryserviceMicrosoftAd#password}

---

##### `shortName`<sup>Optional</sup> <a name="shortName" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.shortName"></a>

```java
public java.lang.String getShortName();
```

- *Type:* java.lang.String

The NetBIOS name for your domain, such as CORP.

If you don't specify a NetBIOS name, it will default to the first part of your directory DNS. For example, CORP for the directory DNS corp.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#short_name DirectoryserviceMicrosoftAd#short_name}

---

### DirectoryserviceMicrosoftAdVpcSettings <a name="DirectoryserviceMicrosoftAdVpcSettings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.directoryservice_microsoft_ad.DirectoryserviceMicrosoftAdVpcSettings;

DirectoryserviceMicrosoftAdVpcSettings.builder()
    .subnetIds(java.util.List<java.lang.String>)
    .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | The identifiers of the subnets for the directory servers. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The identifier of the VPC in which to create the directory. |

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

The identifiers of the subnets for the directory servers.

The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#subnet_ids DirectoryserviceMicrosoftAd#subnet_ids}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

The identifier of the VPC in which to create the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#vpc_id DirectoryserviceMicrosoftAd#vpc_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryserviceMicrosoftAdVpcSettingsOutputReference <a name="DirectoryserviceMicrosoftAdVpcSettingsOutputReference" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.directoryservice_microsoft_ad.DirectoryserviceMicrosoftAdVpcSettingsOutputReference;

new DirectoryserviceMicrosoftAdVpcSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DirectoryserviceMicrosoftAdVpcSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a>

---



