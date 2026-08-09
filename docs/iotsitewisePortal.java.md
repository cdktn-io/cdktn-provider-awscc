# `iotsitewisePortal` Submodule <a name="`iotsitewisePortal` Submodule" id="@cdktn/provider-awscc.iotsitewisePortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewisePortal <a name="IotsitewisePortal" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal awscc_iotsitewise_portal}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_portal.IotsitewisePortal;

IotsitewisePortal.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .portalContactEmail(java.lang.String)
    .portalName(java.lang.String)
    .roleArn(java.lang.String)
//  .alarms(IotsitewisePortalAlarms)
//  .notificationSenderEmail(java.lang.String)
//  .portalAuthMode(java.lang.String)
//  .portalDescription(java.lang.String)
//  .portalType(java.lang.String)
//  .portalTypeConfiguration(IResolvable|java.util.Map<java.lang.String, IotsitewisePortalPortalTypeConfiguration>)
//  .tags(IResolvable|java.util.List<IotsitewisePortalTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalContactEmail">portalContactEmail</a></code> | <code>java.lang.String</code> | The AWS administrator's contact email address. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalName">portalName</a></code> | <code>java.lang.String</code> | A friendly name for the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a></code> | Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.notificationSenderEmail">notificationSenderEmail</a></code> | <code>java.lang.String</code> | The email address that sends alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalAuthMode">portalAuthMode</a></code> | <code>java.lang.String</code> | The service to use to authenticate users to the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalDescription">portalDescription</a></code> | <code>java.lang.String</code> | A description for the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalType">portalType</a></code> | <code>java.lang.String</code> | The type of portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalTypeConfiguration">portalTypeConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>></code> | Map to associate detail of configuration related with a PortalType. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>></code> | A list of key-value pairs that contain metadata for the portal. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `portalContactEmail`<sup>Required</sup> <a name="portalContactEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalContactEmail"></a>

- *Type:* java.lang.String

The AWS administrator's contact email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#portal_contact_email IotsitewisePortal#portal_contact_email}

---

##### `portalName`<sup>Required</sup> <a name="portalName" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalName"></a>

- *Type:* java.lang.String

A friendly name for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#portal_name IotsitewisePortal#portal_name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#role_arn IotsitewisePortal#role_arn}

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.alarms"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a>

Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal.

You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#alarms IotsitewisePortal#alarms}

---

##### `notificationSenderEmail`<sup>Optional</sup> <a name="notificationSenderEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.notificationSenderEmail"></a>

- *Type:* java.lang.String

The email address that sends alarm notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#notification_sender_email IotsitewisePortal#notification_sender_email}

---

##### `portalAuthMode`<sup>Optional</sup> <a name="portalAuthMode" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalAuthMode"></a>

- *Type:* java.lang.String

The service to use to authenticate users to the portal.

Choose from SSO or IAM. You can't change this value after you create a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#portal_auth_mode IotsitewisePortal#portal_auth_mode}

---

##### `portalDescription`<sup>Optional</sup> <a name="portalDescription" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalDescription"></a>

- *Type:* java.lang.String

A description for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#portal_description IotsitewisePortal#portal_description}

---

##### `portalType`<sup>Optional</sup> <a name="portalType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalType"></a>

- *Type:* java.lang.String

The type of portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#portal_type IotsitewisePortal#portal_type}

---

##### `portalTypeConfiguration`<sup>Optional</sup> <a name="portalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalTypeConfiguration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>>

Map to associate detail of configuration related with a PortalType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#portal_type_configuration IotsitewisePortal#portal_type_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>>

A list of key-value pairs that contain metadata for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#tags IotsitewisePortal#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putAlarms">putAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putPortalTypeConfiguration">putPortalTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetNotificationSenderEmail">resetNotificationSenderEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalAuthMode">resetPortalAuthMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalDescription">resetPortalDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalType">resetPortalType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalTypeConfiguration">resetPortalTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlarms` <a name="putAlarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putAlarms"></a>

```java
public void putAlarms(IotsitewisePortalAlarms value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putAlarms.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a>

---

##### `putPortalTypeConfiguration` <a name="putPortalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putPortalTypeConfiguration"></a>

```java
public void putPortalTypeConfiguration(IResolvable|java.util.Map<java.lang.String, IotsitewisePortalPortalTypeConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putPortalTypeConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotsitewisePortalTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>>

---

##### `resetAlarms` <a name="resetAlarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetAlarms"></a>

```java
public void resetAlarms()
```

##### `resetNotificationSenderEmail` <a name="resetNotificationSenderEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetNotificationSenderEmail"></a>

```java
public void resetNotificationSenderEmail()
```

##### `resetPortalAuthMode` <a name="resetPortalAuthMode" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalAuthMode"></a>

```java
public void resetPortalAuthMode()
```

##### `resetPortalDescription` <a name="resetPortalDescription" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalDescription"></a>

```java
public void resetPortalDescription()
```

##### `resetPortalType` <a name="resetPortalType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalType"></a>

```java
public void resetPortalType()
```

##### `resetPortalTypeConfiguration` <a name="resetPortalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalTypeConfiguration"></a>

```java
public void resetPortalTypeConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotsitewisePortal resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_portal.IotsitewisePortal;

IotsitewisePortal.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_portal.IotsitewisePortal;

IotsitewisePortal.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_portal.IotsitewisePortal;

IotsitewisePortal.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_portal.IotsitewisePortal;

IotsitewisePortal.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotsitewisePortal.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotsitewisePortal resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotsitewisePortal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotsitewisePortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewisePortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference">IotsitewisePortalAlarmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalArn">portalArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalClientId">portalClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalId">portalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalStartUrl">portalStartUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeConfiguration">portalTypeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap">IotsitewisePortalPortalTypeConfigurationMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList">IotsitewisePortalTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.alarmsInput">alarmsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.notificationSenderEmailInput">notificationSenderEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalAuthModeInput">portalAuthModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalContactEmailInput">portalContactEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalDescriptionInput">portalDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalNameInput">portalNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeConfigurationInput">portalTypeConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeInput">portalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.notificationSenderEmail">notificationSenderEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalAuthMode">portalAuthMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalContactEmail">portalContactEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalDescription">portalDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalName">portalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalType">portalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.alarms"></a>

```java
public IotsitewisePortalAlarmsOutputReference getAlarms();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference">IotsitewisePortalAlarmsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `portalArn`<sup>Required</sup> <a name="portalArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalArn"></a>

```java
public java.lang.String getPortalArn();
```

- *Type:* java.lang.String

---

##### `portalClientId`<sup>Required</sup> <a name="portalClientId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalClientId"></a>

```java
public java.lang.String getPortalClientId();
```

- *Type:* java.lang.String

---

##### `portalId`<sup>Required</sup> <a name="portalId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalId"></a>

```java
public java.lang.String getPortalId();
```

- *Type:* java.lang.String

---

##### `portalStartUrl`<sup>Required</sup> <a name="portalStartUrl" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalStartUrl"></a>

```java
public java.lang.String getPortalStartUrl();
```

- *Type:* java.lang.String

---

##### `portalTypeConfiguration`<sup>Required</sup> <a name="portalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeConfiguration"></a>

```java
public IotsitewisePortalPortalTypeConfigurationMap getPortalTypeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap">IotsitewisePortalPortalTypeConfigurationMap</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tags"></a>

```java
public IotsitewisePortalTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList">IotsitewisePortalTagsList</a>

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.alarmsInput"></a>

```java
public IResolvable|IotsitewisePortalAlarms getAlarmsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a>

---

##### `notificationSenderEmailInput`<sup>Optional</sup> <a name="notificationSenderEmailInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.notificationSenderEmailInput"></a>

```java
public java.lang.String getNotificationSenderEmailInput();
```

- *Type:* java.lang.String

---

##### `portalAuthModeInput`<sup>Optional</sup> <a name="portalAuthModeInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalAuthModeInput"></a>

```java
public java.lang.String getPortalAuthModeInput();
```

- *Type:* java.lang.String

---

##### `portalContactEmailInput`<sup>Optional</sup> <a name="portalContactEmailInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalContactEmailInput"></a>

```java
public java.lang.String getPortalContactEmailInput();
```

- *Type:* java.lang.String

---

##### `portalDescriptionInput`<sup>Optional</sup> <a name="portalDescriptionInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalDescriptionInput"></a>

```java
public java.lang.String getPortalDescriptionInput();
```

- *Type:* java.lang.String

---

##### `portalNameInput`<sup>Optional</sup> <a name="portalNameInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalNameInput"></a>

```java
public java.lang.String getPortalNameInput();
```

- *Type:* java.lang.String

---

##### `portalTypeConfigurationInput`<sup>Optional</sup> <a name="portalTypeConfigurationInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeConfigurationInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, IotsitewisePortalPortalTypeConfiguration> getPortalTypeConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>>

---

##### `portalTypeInput`<sup>Optional</sup> <a name="portalTypeInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeInput"></a>

```java
public java.lang.String getPortalTypeInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotsitewisePortalTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>>

---

##### `notificationSenderEmail`<sup>Required</sup> <a name="notificationSenderEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.notificationSenderEmail"></a>

```java
public java.lang.String getNotificationSenderEmail();
```

- *Type:* java.lang.String

---

##### `portalAuthMode`<sup>Required</sup> <a name="portalAuthMode" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalAuthMode"></a>

```java
public java.lang.String getPortalAuthMode();
```

- *Type:* java.lang.String

---

##### `portalContactEmail`<sup>Required</sup> <a name="portalContactEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalContactEmail"></a>

```java
public java.lang.String getPortalContactEmail();
```

- *Type:* java.lang.String

---

##### `portalDescription`<sup>Required</sup> <a name="portalDescription" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalDescription"></a>

```java
public java.lang.String getPortalDescription();
```

- *Type:* java.lang.String

---

##### `portalName`<sup>Required</sup> <a name="portalName" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalName"></a>

```java
public java.lang.String getPortalName();
```

- *Type:* java.lang.String

---

##### `portalType`<sup>Required</sup> <a name="portalType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalType"></a>

```java
public java.lang.String getPortalType();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewisePortalAlarms <a name="IotsitewisePortalAlarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_portal.IotsitewisePortalAlarms;

IotsitewisePortalAlarms.builder()
//  .alarmRoleArn(java.lang.String)
//  .notificationLambdaArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.property.alarmRoleArn">alarmRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that allows the alarm to perform actions and access AWS resources and services, such as AWS IoT Events. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.property.notificationLambdaArn">notificationLambdaArn</a></code> | <code>java.lang.String</code> | The ARN of the AWS Lambda function that manages alarm notifications. |

---

##### `alarmRoleArn`<sup>Optional</sup> <a name="alarmRoleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.property.alarmRoleArn"></a>

```java
public java.lang.String getAlarmRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role that allows the alarm to perform actions and access AWS resources and services, such as AWS IoT Events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#alarm_role_arn IotsitewisePortal#alarm_role_arn}

---

##### `notificationLambdaArn`<sup>Optional</sup> <a name="notificationLambdaArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.property.notificationLambdaArn"></a>

```java
public java.lang.String getNotificationLambdaArn();
```

- *Type:* java.lang.String

The ARN of the AWS Lambda function that manages alarm notifications.

For more information, see Managing alarm notifications in the AWS IoT Events Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#notification_lambda_arn IotsitewisePortal#notification_lambda_arn}

---

### IotsitewisePortalConfig <a name="IotsitewisePortalConfig" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_portal.IotsitewisePortalConfig;

IotsitewisePortalConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .portalContactEmail(java.lang.String)
    .portalName(java.lang.String)
    .roleArn(java.lang.String)
//  .alarms(IotsitewisePortalAlarms)
//  .notificationSenderEmail(java.lang.String)
//  .portalAuthMode(java.lang.String)
//  .portalDescription(java.lang.String)
//  .portalType(java.lang.String)
//  .portalTypeConfiguration(IResolvable|java.util.Map<java.lang.String, IotsitewisePortalPortalTypeConfiguration>)
//  .tags(IResolvable|java.util.List<IotsitewisePortalTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalContactEmail">portalContactEmail</a></code> | <code>java.lang.String</code> | The AWS administrator's contact email address. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalName">portalName</a></code> | <code>java.lang.String</code> | A friendly name for the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a></code> | Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.notificationSenderEmail">notificationSenderEmail</a></code> | <code>java.lang.String</code> | The email address that sends alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalAuthMode">portalAuthMode</a></code> | <code>java.lang.String</code> | The service to use to authenticate users to the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalDescription">portalDescription</a></code> | <code>java.lang.String</code> | A description for the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalType">portalType</a></code> | <code>java.lang.String</code> | The type of portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalTypeConfiguration">portalTypeConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>></code> | Map to associate detail of configuration related with a PortalType. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>></code> | A list of key-value pairs that contain metadata for the portal. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `portalContactEmail`<sup>Required</sup> <a name="portalContactEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalContactEmail"></a>

```java
public java.lang.String getPortalContactEmail();
```

- *Type:* java.lang.String

The AWS administrator's contact email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#portal_contact_email IotsitewisePortal#portal_contact_email}

---

##### `portalName`<sup>Required</sup> <a name="portalName" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalName"></a>

```java
public java.lang.String getPortalName();
```

- *Type:* java.lang.String

A friendly name for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#portal_name IotsitewisePortal#portal_name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#role_arn IotsitewisePortal#role_arn}

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.alarms"></a>

```java
public IotsitewisePortalAlarms getAlarms();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a>

Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal.

You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#alarms IotsitewisePortal#alarms}

---

##### `notificationSenderEmail`<sup>Optional</sup> <a name="notificationSenderEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.notificationSenderEmail"></a>

```java
public java.lang.String getNotificationSenderEmail();
```

- *Type:* java.lang.String

The email address that sends alarm notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#notification_sender_email IotsitewisePortal#notification_sender_email}

---

##### `portalAuthMode`<sup>Optional</sup> <a name="portalAuthMode" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalAuthMode"></a>

```java
public java.lang.String getPortalAuthMode();
```

- *Type:* java.lang.String

The service to use to authenticate users to the portal.

Choose from SSO or IAM. You can't change this value after you create a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#portal_auth_mode IotsitewisePortal#portal_auth_mode}

---

##### `portalDescription`<sup>Optional</sup> <a name="portalDescription" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalDescription"></a>

```java
public java.lang.String getPortalDescription();
```

- *Type:* java.lang.String

A description for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#portal_description IotsitewisePortal#portal_description}

---

##### `portalType`<sup>Optional</sup> <a name="portalType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalType"></a>

```java
public java.lang.String getPortalType();
```

- *Type:* java.lang.String

The type of portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#portal_type IotsitewisePortal#portal_type}

---

##### `portalTypeConfiguration`<sup>Optional</sup> <a name="portalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalTypeConfiguration"></a>

```java
public IResolvable|java.util.Map<java.lang.String, IotsitewisePortalPortalTypeConfiguration> getPortalTypeConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>>

Map to associate detail of configuration related with a PortalType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#portal_type_configuration IotsitewisePortal#portal_type_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotsitewisePortalTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>>

A list of key-value pairs that contain metadata for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#tags IotsitewisePortal#tags}

---

### IotsitewisePortalPortalTypeConfiguration <a name="IotsitewisePortalPortalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_portal.IotsitewisePortalPortalTypeConfiguration;

IotsitewisePortalPortalTypeConfiguration.builder()
//  .portalTools(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration.property.portalTools">portalTools</a></code> | <code>java.util.List<java.lang.String></code> | List of enabled Tools for a certain portal. |

---

##### `portalTools`<sup>Optional</sup> <a name="portalTools" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration.property.portalTools"></a>

```java
public java.util.List<java.lang.String> getPortalTools();
```

- *Type:* java.util.List<java.lang.String>

List of enabled Tools for a certain portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#portal_tools IotsitewisePortal#portal_tools}

---

### IotsitewisePortalTags <a name="IotsitewisePortalTags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_portal.IotsitewisePortalTags;

IotsitewisePortalTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#key IotsitewisePortal#key}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#value IotsitewisePortal#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#key IotsitewisePortal#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_portal#value IotsitewisePortal#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewisePortalAlarmsOutputReference <a name="IotsitewisePortalAlarmsOutputReference" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_portal.IotsitewisePortalAlarmsOutputReference;

new IotsitewisePortalAlarmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resetAlarmRoleArn">resetAlarmRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resetNotificationLambdaArn">resetNotificationLambdaArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarmRoleArn` <a name="resetAlarmRoleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resetAlarmRoleArn"></a>

```java
public void resetAlarmRoleArn()
```

##### `resetNotificationLambdaArn` <a name="resetNotificationLambdaArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resetNotificationLambdaArn"></a>

```java
public void resetNotificationLambdaArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.alarmRoleArnInput">alarmRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.notificationLambdaArnInput">notificationLambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.alarmRoleArn">alarmRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.notificationLambdaArn">notificationLambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmRoleArnInput`<sup>Optional</sup> <a name="alarmRoleArnInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.alarmRoleArnInput"></a>

```java
public java.lang.String getAlarmRoleArnInput();
```

- *Type:* java.lang.String

---

##### `notificationLambdaArnInput`<sup>Optional</sup> <a name="notificationLambdaArnInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.notificationLambdaArnInput"></a>

```java
public java.lang.String getNotificationLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `alarmRoleArn`<sup>Required</sup> <a name="alarmRoleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.alarmRoleArn"></a>

```java
public java.lang.String getAlarmRoleArn();
```

- *Type:* java.lang.String

---

##### `notificationLambdaArn`<sup>Required</sup> <a name="notificationLambdaArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.notificationLambdaArn"></a>

```java
public java.lang.String getNotificationLambdaArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewisePortalAlarms getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a>

---


### IotsitewisePortalPortalTypeConfigurationMap <a name="IotsitewisePortalPortalTypeConfigurationMap" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_portal.IotsitewisePortalPortalTypeConfigurationMap;

new IotsitewisePortalPortalTypeConfigurationMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.get"></a>

```java
public IotsitewisePortalPortalTypeConfigurationOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, IotsitewisePortalPortalTypeConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>>

---


### IotsitewisePortalPortalTypeConfigurationOutputReference <a name="IotsitewisePortalPortalTypeConfigurationOutputReference" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_portal.IotsitewisePortalPortalTypeConfigurationOutputReference;

new IotsitewisePortalPortalTypeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resetPortalTools">resetPortalTools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPortalTools` <a name="resetPortalTools" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resetPortalTools"></a>

```java
public void resetPortalTools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.portalToolsInput">portalToolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.portalTools">portalTools</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portalToolsInput`<sup>Optional</sup> <a name="portalToolsInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.portalToolsInput"></a>

```java
public java.util.List<java.lang.String> getPortalToolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `portalTools`<sup>Required</sup> <a name="portalTools" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.portalTools"></a>

```java
public java.util.List<java.lang.String> getPortalTools();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewisePortalPortalTypeConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>

---


### IotsitewisePortalTagsList <a name="IotsitewisePortalTagsList" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_portal.IotsitewisePortalTagsList;

new IotsitewisePortalTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.get"></a>

```java
public IotsitewisePortalTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotsitewisePortalTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>>

---


### IotsitewisePortalTagsOutputReference <a name="IotsitewisePortalTagsOutputReference" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_portal.IotsitewisePortalTagsOutputReference;

new IotsitewisePortalTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewisePortalTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>

---



