# `sesEmailIdentity` Submodule <a name="`sesEmailIdentity` Submodule" id="@cdktn/provider-awscc.sesEmailIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesEmailIdentity <a name="SesEmailIdentity" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity awscc_ses_email_identity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_email_identity.SesEmailIdentity;

SesEmailIdentity.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .emailIdentity(java.lang.String)
//  .configurationSetAttributes(SesEmailIdentityConfigurationSetAttributes)
//  .dkimAttributes(SesEmailIdentityDkimAttributes)
//  .dkimSigningAttributes(SesEmailIdentityDkimSigningAttributes)
//  .feedbackAttributes(SesEmailIdentityFeedbackAttributes)
//  .mailFromAttributes(SesEmailIdentityMailFromAttributes)
//  .tags(IResolvable|java.util.List<SesEmailIdentityTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.emailIdentity">emailIdentity</a></code> | <code>java.lang.String</code> | The email address or domain to verify. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.configurationSetAttributes">configurationSetAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a></code> | Used to associate a configuration set with an email identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.dkimAttributes">dkimAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a></code> | Used to enable or disable DKIM authentication for an email identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.dkimSigningAttributes">dkimSigningAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a></code> | If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for Easy DKIM. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.feedbackAttributes">feedbackAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a></code> | Used to enable or disable feedback forwarding for an identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.mailFromAttributes">mailFromAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a></code> | Used to enable or disable the custom Mail-From domain configuration for an email identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>></code> | The tags (keys and values) associated with the email identity. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.emailIdentity"></a>

- *Type:* java.lang.String

The email address or domain to verify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#email_identity SesEmailIdentity#email_identity}

---

##### `configurationSetAttributes`<sup>Optional</sup> <a name="configurationSetAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.configurationSetAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a>

Used to associate a configuration set with an email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#configuration_set_attributes SesEmailIdentity#configuration_set_attributes}

---

##### `dkimAttributes`<sup>Optional</sup> <a name="dkimAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.dkimAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a>

Used to enable or disable DKIM authentication for an email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#dkim_attributes SesEmailIdentity#dkim_attributes}

---

##### `dkimSigningAttributes`<sup>Optional</sup> <a name="dkimSigningAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.dkimSigningAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a>

If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for Easy DKIM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#dkim_signing_attributes SesEmailIdentity#dkim_signing_attributes}

---

##### `feedbackAttributes`<sup>Optional</sup> <a name="feedbackAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.feedbackAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a>

Used to enable or disable feedback forwarding for an identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#feedback_attributes SesEmailIdentity#feedback_attributes}

---

##### `mailFromAttributes`<sup>Optional</sup> <a name="mailFromAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.mailFromAttributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a>

Used to enable or disable the custom Mail-From domain configuration for an email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#mail_from_attributes SesEmailIdentity#mail_from_attributes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>>

The tags (keys and values) associated with the email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#tags SesEmailIdentity#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putConfigurationSetAttributes">putConfigurationSetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimAttributes">putDkimAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimSigningAttributes">putDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putFeedbackAttributes">putFeedbackAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putMailFromAttributes">putMailFromAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetConfigurationSetAttributes">resetConfigurationSetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetDkimAttributes">resetDkimAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetDkimSigningAttributes">resetDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetFeedbackAttributes">resetFeedbackAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetMailFromAttributes">resetMailFromAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfigurationSetAttributes` <a name="putConfigurationSetAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putConfigurationSetAttributes"></a>

```java
public void putConfigurationSetAttributes(SesEmailIdentityConfigurationSetAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putConfigurationSetAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a>

---

##### `putDkimAttributes` <a name="putDkimAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimAttributes"></a>

```java
public void putDkimAttributes(SesEmailIdentityDkimAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a>

---

##### `putDkimSigningAttributes` <a name="putDkimSigningAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimSigningAttributes"></a>

```java
public void putDkimSigningAttributes(SesEmailIdentityDkimSigningAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimSigningAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a>

---

##### `putFeedbackAttributes` <a name="putFeedbackAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putFeedbackAttributes"></a>

```java
public void putFeedbackAttributes(SesEmailIdentityFeedbackAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putFeedbackAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a>

---

##### `putMailFromAttributes` <a name="putMailFromAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putMailFromAttributes"></a>

```java
public void putMailFromAttributes(SesEmailIdentityMailFromAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putMailFromAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SesEmailIdentityTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>>

---

##### `resetConfigurationSetAttributes` <a name="resetConfigurationSetAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetConfigurationSetAttributes"></a>

```java
public void resetConfigurationSetAttributes()
```

##### `resetDkimAttributes` <a name="resetDkimAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetDkimAttributes"></a>

```java
public void resetDkimAttributes()
```

##### `resetDkimSigningAttributes` <a name="resetDkimSigningAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetDkimSigningAttributes"></a>

```java
public void resetDkimSigningAttributes()
```

##### `resetFeedbackAttributes` <a name="resetFeedbackAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetFeedbackAttributes"></a>

```java
public void resetFeedbackAttributes()
```

##### `resetMailFromAttributes` <a name="resetMailFromAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetMailFromAttributes"></a>

```java
public void resetMailFromAttributes()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SesEmailIdentity resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ses_email_identity.SesEmailIdentity;

SesEmailIdentity.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ses_email_identity.SesEmailIdentity;

SesEmailIdentity.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ses_email_identity.SesEmailIdentity;

SesEmailIdentity.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ses_email_identity.SesEmailIdentity;

SesEmailIdentity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SesEmailIdentity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SesEmailIdentity resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SesEmailIdentity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SesEmailIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SesEmailIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.configurationSetAttributes">configurationSetAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference">SesEmailIdentityConfigurationSetAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimAttributes">dkimAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference">SesEmailIdentityDkimAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName1">dkimDnsTokenName1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName2">dkimDnsTokenName2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName3">dkimDnsTokenName3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue1">dkimDnsTokenValue1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue2">dkimDnsTokenValue2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue3">dkimDnsTokenValue3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimSigningAttributes">dkimSigningAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference">SesEmailIdentityDkimSigningAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.feedbackAttributes">feedbackAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference">SesEmailIdentityFeedbackAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.mailFromAttributes">mailFromAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference">SesEmailIdentityMailFromAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList">SesEmailIdentityTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.configurationSetAttributesInput">configurationSetAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimAttributesInput">dkimAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimSigningAttributesInput">dkimSigningAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.emailIdentityInput">emailIdentityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.feedbackAttributesInput">feedbackAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.mailFromAttributesInput">mailFromAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.emailIdentity">emailIdentity</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationSetAttributes`<sup>Required</sup> <a name="configurationSetAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.configurationSetAttributes"></a>

```java
public SesEmailIdentityConfigurationSetAttributesOutputReference getConfigurationSetAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference">SesEmailIdentityConfigurationSetAttributesOutputReference</a>

---

##### `dkimAttributes`<sup>Required</sup> <a name="dkimAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimAttributes"></a>

```java
public SesEmailIdentityDkimAttributesOutputReference getDkimAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference">SesEmailIdentityDkimAttributesOutputReference</a>

---

##### `dkimDnsTokenName1`<sup>Required</sup> <a name="dkimDnsTokenName1" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName1"></a>

```java
public java.lang.String getDkimDnsTokenName1();
```

- *Type:* java.lang.String

---

##### `dkimDnsTokenName2`<sup>Required</sup> <a name="dkimDnsTokenName2" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName2"></a>

```java
public java.lang.String getDkimDnsTokenName2();
```

- *Type:* java.lang.String

---

##### `dkimDnsTokenName3`<sup>Required</sup> <a name="dkimDnsTokenName3" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName3"></a>

```java
public java.lang.String getDkimDnsTokenName3();
```

- *Type:* java.lang.String

---

##### `dkimDnsTokenValue1`<sup>Required</sup> <a name="dkimDnsTokenValue1" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue1"></a>

```java
public java.lang.String getDkimDnsTokenValue1();
```

- *Type:* java.lang.String

---

##### `dkimDnsTokenValue2`<sup>Required</sup> <a name="dkimDnsTokenValue2" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue2"></a>

```java
public java.lang.String getDkimDnsTokenValue2();
```

- *Type:* java.lang.String

---

##### `dkimDnsTokenValue3`<sup>Required</sup> <a name="dkimDnsTokenValue3" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue3"></a>

```java
public java.lang.String getDkimDnsTokenValue3();
```

- *Type:* java.lang.String

---

##### `dkimSigningAttributes`<sup>Required</sup> <a name="dkimSigningAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimSigningAttributes"></a>

```java
public SesEmailIdentityDkimSigningAttributesOutputReference getDkimSigningAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference">SesEmailIdentityDkimSigningAttributesOutputReference</a>

---

##### `feedbackAttributes`<sup>Required</sup> <a name="feedbackAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.feedbackAttributes"></a>

```java
public SesEmailIdentityFeedbackAttributesOutputReference getFeedbackAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference">SesEmailIdentityFeedbackAttributesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mailFromAttributes`<sup>Required</sup> <a name="mailFromAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.mailFromAttributes"></a>

```java
public SesEmailIdentityMailFromAttributesOutputReference getMailFromAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference">SesEmailIdentityMailFromAttributesOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tags"></a>

```java
public SesEmailIdentityTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList">SesEmailIdentityTagsList</a>

---

##### `configurationSetAttributesInput`<sup>Optional</sup> <a name="configurationSetAttributesInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.configurationSetAttributesInput"></a>

```java
public IResolvable|SesEmailIdentityConfigurationSetAttributes getConfigurationSetAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a>

---

##### `dkimAttributesInput`<sup>Optional</sup> <a name="dkimAttributesInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimAttributesInput"></a>

```java
public IResolvable|SesEmailIdentityDkimAttributes getDkimAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a>

---

##### `dkimSigningAttributesInput`<sup>Optional</sup> <a name="dkimSigningAttributesInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimSigningAttributesInput"></a>

```java
public IResolvable|SesEmailIdentityDkimSigningAttributes getDkimSigningAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a>

---

##### `emailIdentityInput`<sup>Optional</sup> <a name="emailIdentityInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.emailIdentityInput"></a>

```java
public java.lang.String getEmailIdentityInput();
```

- *Type:* java.lang.String

---

##### `feedbackAttributesInput`<sup>Optional</sup> <a name="feedbackAttributesInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.feedbackAttributesInput"></a>

```java
public IResolvable|SesEmailIdentityFeedbackAttributes getFeedbackAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a>

---

##### `mailFromAttributesInput`<sup>Optional</sup> <a name="mailFromAttributesInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.mailFromAttributesInput"></a>

```java
public IResolvable|SesEmailIdentityMailFromAttributes getMailFromAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SesEmailIdentityTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>>

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.emailIdentity"></a>

```java
public java.lang.String getEmailIdentity();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SesEmailIdentityConfig <a name="SesEmailIdentityConfig" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_email_identity.SesEmailIdentityConfig;

SesEmailIdentityConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .emailIdentity(java.lang.String)
//  .configurationSetAttributes(SesEmailIdentityConfigurationSetAttributes)
//  .dkimAttributes(SesEmailIdentityDkimAttributes)
//  .dkimSigningAttributes(SesEmailIdentityDkimSigningAttributes)
//  .feedbackAttributes(SesEmailIdentityFeedbackAttributes)
//  .mailFromAttributes(SesEmailIdentityMailFromAttributes)
//  .tags(IResolvable|java.util.List<SesEmailIdentityTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.emailIdentity">emailIdentity</a></code> | <code>java.lang.String</code> | The email address or domain to verify. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.configurationSetAttributes">configurationSetAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a></code> | Used to associate a configuration set with an email identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dkimAttributes">dkimAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a></code> | Used to enable or disable DKIM authentication for an email identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dkimSigningAttributes">dkimSigningAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a></code> | If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for Easy DKIM. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.feedbackAttributes">feedbackAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a></code> | Used to enable or disable feedback forwarding for an identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.mailFromAttributes">mailFromAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a></code> | Used to enable or disable the custom Mail-From domain configuration for an email identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>></code> | The tags (keys and values) associated with the email identity. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.emailIdentity"></a>

```java
public java.lang.String getEmailIdentity();
```

- *Type:* java.lang.String

The email address or domain to verify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#email_identity SesEmailIdentity#email_identity}

---

##### `configurationSetAttributes`<sup>Optional</sup> <a name="configurationSetAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.configurationSetAttributes"></a>

```java
public SesEmailIdentityConfigurationSetAttributes getConfigurationSetAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a>

Used to associate a configuration set with an email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#configuration_set_attributes SesEmailIdentity#configuration_set_attributes}

---

##### `dkimAttributes`<sup>Optional</sup> <a name="dkimAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dkimAttributes"></a>

```java
public SesEmailIdentityDkimAttributes getDkimAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a>

Used to enable or disable DKIM authentication for an email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#dkim_attributes SesEmailIdentity#dkim_attributes}

---

##### `dkimSigningAttributes`<sup>Optional</sup> <a name="dkimSigningAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dkimSigningAttributes"></a>

```java
public SesEmailIdentityDkimSigningAttributes getDkimSigningAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a>

If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for Easy DKIM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#dkim_signing_attributes SesEmailIdentity#dkim_signing_attributes}

---

##### `feedbackAttributes`<sup>Optional</sup> <a name="feedbackAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.feedbackAttributes"></a>

```java
public SesEmailIdentityFeedbackAttributes getFeedbackAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a>

Used to enable or disable feedback forwarding for an identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#feedback_attributes SesEmailIdentity#feedback_attributes}

---

##### `mailFromAttributes`<sup>Optional</sup> <a name="mailFromAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.mailFromAttributes"></a>

```java
public SesEmailIdentityMailFromAttributes getMailFromAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a>

Used to enable or disable the custom Mail-From domain configuration for an email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#mail_from_attributes SesEmailIdentity#mail_from_attributes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SesEmailIdentityTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>>

The tags (keys and values) associated with the email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#tags SesEmailIdentity#tags}

---

### SesEmailIdentityConfigurationSetAttributes <a name="SesEmailIdentityConfigurationSetAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_email_identity.SesEmailIdentityConfigurationSetAttributes;

SesEmailIdentityConfigurationSetAttributes.builder()
//  .configurationSetName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes.property.configurationSetName">configurationSetName</a></code> | <code>java.lang.String</code> | The configuration set to use by default when sending from this identity. |

---

##### `configurationSetName`<sup>Optional</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes.property.configurationSetName"></a>

```java
public java.lang.String getConfigurationSetName();
```

- *Type:* java.lang.String

The configuration set to use by default when sending from this identity.

Note that any configuration set defined in the email sending request takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#configuration_set_name SesEmailIdentity#configuration_set_name}

---

### SesEmailIdentityDkimAttributes <a name="SesEmailIdentityDkimAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_email_identity.SesEmailIdentityDkimAttributes;

SesEmailIdentityDkimAttributes.builder()
//  .signingEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes.property.signingEnabled">signingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Sets the DKIM signing configuration for the identity. |

---

##### `signingEnabled`<sup>Optional</sup> <a name="signingEnabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes.property.signingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSigningEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Sets the DKIM signing configuration for the identity.

When you set this value true, then the messages that are sent from the identity are signed using DKIM. If you set this value to false, your messages are sent without DKIM signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#signing_enabled SesEmailIdentity#signing_enabled}

---

### SesEmailIdentityDkimSigningAttributes <a name="SesEmailIdentityDkimSigningAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_email_identity.SesEmailIdentityDkimSigningAttributes;

SesEmailIdentityDkimSigningAttributes.builder()
//  .domainSigningPrivateKey(java.lang.String)
//  .domainSigningSelector(java.lang.String)
//  .nextSigningKeyLength(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.domainSigningPrivateKey">domainSigningPrivateKey</a></code> | <code>java.lang.String</code> | [Bring Your Own DKIM] A private key that's used to generate a DKIM signature. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.domainSigningSelector">domainSigningSelector</a></code> | <code>java.lang.String</code> | [Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.nextSigningKeyLength">nextSigningKeyLength</a></code> | <code>java.lang.String</code> | [Easy DKIM] The key length of the future DKIM key pair to be generated. |

---

##### `domainSigningPrivateKey`<sup>Optional</sup> <a name="domainSigningPrivateKey" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.domainSigningPrivateKey"></a>

```java
public java.lang.String getDomainSigningPrivateKey();
```

- *Type:* java.lang.String

[Bring Your Own DKIM] A private key that's used to generate a DKIM signature.

The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#domain_signing_private_key SesEmailIdentity#domain_signing_private_key}

---

##### `domainSigningSelector`<sup>Optional</sup> <a name="domainSigningSelector" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.domainSigningSelector"></a>

```java
public java.lang.String getDomainSigningSelector();
```

- *Type:* java.lang.String

[Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#domain_signing_selector SesEmailIdentity#domain_signing_selector}

---

##### `nextSigningKeyLength`<sup>Optional</sup> <a name="nextSigningKeyLength" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.nextSigningKeyLength"></a>

```java
public java.lang.String getNextSigningKeyLength();
```

- *Type:* java.lang.String

[Easy DKIM] The key length of the future DKIM key pair to be generated.

This can be changed at most once per day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#next_signing_key_length SesEmailIdentity#next_signing_key_length}

---

### SesEmailIdentityFeedbackAttributes <a name="SesEmailIdentityFeedbackAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_email_identity.SesEmailIdentityFeedbackAttributes;

SesEmailIdentityFeedbackAttributes.builder()
//  .emailForwardingEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes.property.emailForwardingEnabled">emailForwardingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If the value is true, you receive email notifications when bounce or complaint events occur. |

---

##### `emailForwardingEnabled`<sup>Optional</sup> <a name="emailForwardingEnabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes.property.emailForwardingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEmailForwardingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If the value is true, you receive email notifications when bounce or complaint events occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#email_forwarding_enabled SesEmailIdentity#email_forwarding_enabled}

---

### SesEmailIdentityMailFromAttributes <a name="SesEmailIdentityMailFromAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_email_identity.SesEmailIdentityMailFromAttributes;

SesEmailIdentityMailFromAttributes.builder()
//  .behaviorOnMxFailure(java.lang.String)
//  .mailFromDomain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes.property.behaviorOnMxFailure">behaviorOnMxFailure</a></code> | <code>java.lang.String</code> | The action to take if the required MX record isn't found when you send an email. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes.property.mailFromDomain">mailFromDomain</a></code> | <code>java.lang.String</code> | The custom MAIL FROM domain that you want the verified identity to use. |

---

##### `behaviorOnMxFailure`<sup>Optional</sup> <a name="behaviorOnMxFailure" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes.property.behaviorOnMxFailure"></a>

```java
public java.lang.String getBehaviorOnMxFailure();
```

- *Type:* java.lang.String

The action to take if the required MX record isn't found when you send an email.

When you set this value to UseDefaultValue , the mail is sent using amazonses.com as the MAIL FROM domain. When you set this value to RejectMessage , the Amazon SES API v2 returns a MailFromDomainNotVerified error, and doesn't attempt to deliver the email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#behavior_on_mx_failure SesEmailIdentity#behavior_on_mx_failure}

---

##### `mailFromDomain`<sup>Optional</sup> <a name="mailFromDomain" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes.property.mailFromDomain"></a>

```java
public java.lang.String getMailFromDomain();
```

- *Type:* java.lang.String

The custom MAIL FROM domain that you want the verified identity to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#mail_from_domain SesEmailIdentity#mail_from_domain}

---

### SesEmailIdentityTags <a name="SesEmailIdentityTags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_email_identity.SesEmailIdentityTags;

SesEmailIdentityTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#key SesEmailIdentity#key}. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#value SesEmailIdentity#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#key SesEmailIdentity#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#value SesEmailIdentity#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesEmailIdentityConfigurationSetAttributesOutputReference <a name="SesEmailIdentityConfigurationSetAttributesOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_email_identity.SesEmailIdentityConfigurationSetAttributesOutputReference;

new SesEmailIdentityConfigurationSetAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.resetConfigurationSetName">resetConfigurationSetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigurationSetName` <a name="resetConfigurationSetName" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.resetConfigurationSetName"></a>

```java
public void resetConfigurationSetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.configurationSetNameInput">configurationSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.configurationSetName">configurationSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurationSetNameInput`<sup>Optional</sup> <a name="configurationSetNameInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.configurationSetNameInput"></a>

```java
public java.lang.String getConfigurationSetNameInput();
```

- *Type:* java.lang.String

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.configurationSetName"></a>

```java
public java.lang.String getConfigurationSetName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|SesEmailIdentityConfigurationSetAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a>

---


### SesEmailIdentityDkimAttributesOutputReference <a name="SesEmailIdentityDkimAttributesOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_email_identity.SesEmailIdentityDkimAttributesOutputReference;

new SesEmailIdentityDkimAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.resetSigningEnabled">resetSigningEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSigningEnabled` <a name="resetSigningEnabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.resetSigningEnabled"></a>

```java
public void resetSigningEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.signingEnabledInput">signingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.signingEnabled">signingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `signingEnabledInput`<sup>Optional</sup> <a name="signingEnabledInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.signingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSigningEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `signingEnabled`<sup>Required</sup> <a name="signingEnabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.signingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSigningEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|SesEmailIdentityDkimAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a>

---


### SesEmailIdentityDkimSigningAttributesOutputReference <a name="SesEmailIdentityDkimSigningAttributesOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_email_identity.SesEmailIdentityDkimSigningAttributesOutputReference;

new SesEmailIdentityDkimSigningAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningPrivateKey">resetDomainSigningPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningSelector">resetDomainSigningSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetNextSigningKeyLength">resetNextSigningKeyLength</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomainSigningPrivateKey` <a name="resetDomainSigningPrivateKey" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningPrivateKey"></a>

```java
public void resetDomainSigningPrivateKey()
```

##### `resetDomainSigningSelector` <a name="resetDomainSigningSelector" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningSelector"></a>

```java
public void resetDomainSigningSelector()
```

##### `resetNextSigningKeyLength` <a name="resetNextSigningKeyLength" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetNextSigningKeyLength"></a>

```java
public void resetNextSigningKeyLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKeyInput">domainSigningPrivateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelectorInput">domainSigningSelectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLengthInput">nextSigningKeyLengthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey">domainSigningPrivateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector">domainSigningSelector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength">nextSigningKeyLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainSigningPrivateKeyInput`<sup>Optional</sup> <a name="domainSigningPrivateKeyInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKeyInput"></a>

```java
public java.lang.String getDomainSigningPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `domainSigningSelectorInput`<sup>Optional</sup> <a name="domainSigningSelectorInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelectorInput"></a>

```java
public java.lang.String getDomainSigningSelectorInput();
```

- *Type:* java.lang.String

---

##### `nextSigningKeyLengthInput`<sup>Optional</sup> <a name="nextSigningKeyLengthInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLengthInput"></a>

```java
public java.lang.String getNextSigningKeyLengthInput();
```

- *Type:* java.lang.String

---

##### `domainSigningPrivateKey`<sup>Required</sup> <a name="domainSigningPrivateKey" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey"></a>

```java
public java.lang.String getDomainSigningPrivateKey();
```

- *Type:* java.lang.String

---

##### `domainSigningSelector`<sup>Required</sup> <a name="domainSigningSelector" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector"></a>

```java
public java.lang.String getDomainSigningSelector();
```

- *Type:* java.lang.String

---

##### `nextSigningKeyLength`<sup>Required</sup> <a name="nextSigningKeyLength" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength"></a>

```java
public java.lang.String getNextSigningKeyLength();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|SesEmailIdentityDkimSigningAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a>

---


### SesEmailIdentityFeedbackAttributesOutputReference <a name="SesEmailIdentityFeedbackAttributesOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_email_identity.SesEmailIdentityFeedbackAttributesOutputReference;

new SesEmailIdentityFeedbackAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.resetEmailForwardingEnabled">resetEmailForwardingEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailForwardingEnabled` <a name="resetEmailForwardingEnabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.resetEmailForwardingEnabled"></a>

```java
public void resetEmailForwardingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.emailForwardingEnabledInput">emailForwardingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.emailForwardingEnabled">emailForwardingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailForwardingEnabledInput`<sup>Optional</sup> <a name="emailForwardingEnabledInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.emailForwardingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEmailForwardingEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `emailForwardingEnabled`<sup>Required</sup> <a name="emailForwardingEnabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.emailForwardingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEmailForwardingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|SesEmailIdentityFeedbackAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a>

---


### SesEmailIdentityMailFromAttributesOutputReference <a name="SesEmailIdentityMailFromAttributesOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_email_identity.SesEmailIdentityMailFromAttributesOutputReference;

new SesEmailIdentityMailFromAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resetBehaviorOnMxFailure">resetBehaviorOnMxFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resetMailFromDomain">resetMailFromDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBehaviorOnMxFailure` <a name="resetBehaviorOnMxFailure" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resetBehaviorOnMxFailure"></a>

```java
public void resetBehaviorOnMxFailure()
```

##### `resetMailFromDomain` <a name="resetMailFromDomain" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resetMailFromDomain"></a>

```java
public void resetMailFromDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.behaviorOnMxFailureInput">behaviorOnMxFailureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.mailFromDomainInput">mailFromDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.behaviorOnMxFailure">behaviorOnMxFailure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.mailFromDomain">mailFromDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `behaviorOnMxFailureInput`<sup>Optional</sup> <a name="behaviorOnMxFailureInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.behaviorOnMxFailureInput"></a>

```java
public java.lang.String getBehaviorOnMxFailureInput();
```

- *Type:* java.lang.String

---

##### `mailFromDomainInput`<sup>Optional</sup> <a name="mailFromDomainInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.mailFromDomainInput"></a>

```java
public java.lang.String getMailFromDomainInput();
```

- *Type:* java.lang.String

---

##### `behaviorOnMxFailure`<sup>Required</sup> <a name="behaviorOnMxFailure" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.behaviorOnMxFailure"></a>

```java
public java.lang.String getBehaviorOnMxFailure();
```

- *Type:* java.lang.String

---

##### `mailFromDomain`<sup>Required</sup> <a name="mailFromDomain" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.mailFromDomain"></a>

```java
public java.lang.String getMailFromDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|SesEmailIdentityMailFromAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a>

---


### SesEmailIdentityTagsList <a name="SesEmailIdentityTagsList" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_email_identity.SesEmailIdentityTagsList;

new SesEmailIdentityTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.get"></a>

```java
public SesEmailIdentityTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SesEmailIdentityTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>>

---


### SesEmailIdentityTagsOutputReference <a name="SesEmailIdentityTagsOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_email_identity.SesEmailIdentityTagsOutputReference;

new SesEmailIdentityTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SesEmailIdentityTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>

---



