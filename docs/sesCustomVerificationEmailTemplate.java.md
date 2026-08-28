# `sesCustomVerificationEmailTemplate` Submodule <a name="`sesCustomVerificationEmailTemplate` Submodule" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesCustomVerificationEmailTemplate <a name="SesCustomVerificationEmailTemplate" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template awscc_ses_custom_verification_email_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_custom_verification_email_template.SesCustomVerificationEmailTemplate;

SesCustomVerificationEmailTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .failureRedirectionUrl(java.lang.String)
    .fromEmailAddress(java.lang.String)
    .successRedirectionUrl(java.lang.String)
    .templateContent(java.lang.String)
    .templateName(java.lang.String)
    .templateSubject(java.lang.String)
//  .tags(IResolvable|java.util.List<SesCustomVerificationEmailTemplateTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.failureRedirectionUrl">failureRedirectionUrl</a></code> | <code>java.lang.String</code> | The URL that the recipient of the verification email is sent to if his or her address is not successfully verified. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.fromEmailAddress">fromEmailAddress</a></code> | <code>java.lang.String</code> | The email address that the custom verification email is sent from. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.successRedirectionUrl">successRedirectionUrl</a></code> | <code>java.lang.String</code> | The URL that the recipient of the verification email is sent to if his or her address is successfully verified. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.templateContent">templateContent</a></code> | <code>java.lang.String</code> | The content of the custom verification email. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.templateName">templateName</a></code> | <code>java.lang.String</code> | The name of the custom verification email template. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.templateSubject">templateSubject</a></code> | <code>java.lang.String</code> | The subject line of the custom verification email. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>></code> | The tags (keys and values) associated with the tenant. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `failureRedirectionUrl`<sup>Required</sup> <a name="failureRedirectionUrl" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.failureRedirectionUrl"></a>

- *Type:* java.lang.String

The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#failure_redirection_url SesCustomVerificationEmailTemplate#failure_redirection_url}

---

##### `fromEmailAddress`<sup>Required</sup> <a name="fromEmailAddress" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.fromEmailAddress"></a>

- *Type:* java.lang.String

The email address that the custom verification email is sent from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#from_email_address SesCustomVerificationEmailTemplate#from_email_address}

---

##### `successRedirectionUrl`<sup>Required</sup> <a name="successRedirectionUrl" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.successRedirectionUrl"></a>

- *Type:* java.lang.String

The URL that the recipient of the verification email is sent to if his or her address is successfully verified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#success_redirection_url SesCustomVerificationEmailTemplate#success_redirection_url}

---

##### `templateContent`<sup>Required</sup> <a name="templateContent" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.templateContent"></a>

- *Type:* java.lang.String

The content of the custom verification email.

The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#template_content SesCustomVerificationEmailTemplate#template_content}

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.templateName"></a>

- *Type:* java.lang.String

The name of the custom verification email template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#template_name SesCustomVerificationEmailTemplate#template_name}

---

##### `templateSubject`<sup>Required</sup> <a name="templateSubject" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.templateSubject"></a>

- *Type:* java.lang.String

The subject line of the custom verification email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#template_subject SesCustomVerificationEmailTemplate#template_subject}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>>

The tags (keys and values) associated with the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#tags SesCustomVerificationEmailTemplate#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SesCustomVerificationEmailTemplateTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SesCustomVerificationEmailTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ses_custom_verification_email_template.SesCustomVerificationEmailTemplate;

SesCustomVerificationEmailTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ses_custom_verification_email_template.SesCustomVerificationEmailTemplate;

SesCustomVerificationEmailTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ses_custom_verification_email_template.SesCustomVerificationEmailTemplate;

SesCustomVerificationEmailTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ses_custom_verification_email_template.SesCustomVerificationEmailTemplate;

SesCustomVerificationEmailTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SesCustomVerificationEmailTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SesCustomVerificationEmailTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SesCustomVerificationEmailTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SesCustomVerificationEmailTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SesCustomVerificationEmailTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList">SesCustomVerificationEmailTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.failureRedirectionUrlInput">failureRedirectionUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fromEmailAddressInput">fromEmailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.successRedirectionUrlInput">successRedirectionUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateContentInput">templateContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateNameInput">templateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateSubjectInput">templateSubjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.failureRedirectionUrl">failureRedirectionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fromEmailAddress">fromEmailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.successRedirectionUrl">successRedirectionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateContent">templateContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateName">templateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateSubject">templateSubject</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tags"></a>

```java
public SesCustomVerificationEmailTemplateTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList">SesCustomVerificationEmailTemplateTagsList</a>

---

##### `failureRedirectionUrlInput`<sup>Optional</sup> <a name="failureRedirectionUrlInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.failureRedirectionUrlInput"></a>

```java
public java.lang.String getFailureRedirectionUrlInput();
```

- *Type:* java.lang.String

---

##### `fromEmailAddressInput`<sup>Optional</sup> <a name="fromEmailAddressInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fromEmailAddressInput"></a>

```java
public java.lang.String getFromEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `successRedirectionUrlInput`<sup>Optional</sup> <a name="successRedirectionUrlInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.successRedirectionUrlInput"></a>

```java
public java.lang.String getSuccessRedirectionUrlInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SesCustomVerificationEmailTemplateTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>>

---

##### `templateContentInput`<sup>Optional</sup> <a name="templateContentInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateContentInput"></a>

```java
public java.lang.String getTemplateContentInput();
```

- *Type:* java.lang.String

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateNameInput"></a>

```java
public java.lang.String getTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `templateSubjectInput`<sup>Optional</sup> <a name="templateSubjectInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateSubjectInput"></a>

```java
public java.lang.String getTemplateSubjectInput();
```

- *Type:* java.lang.String

---

##### `failureRedirectionUrl`<sup>Required</sup> <a name="failureRedirectionUrl" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.failureRedirectionUrl"></a>

```java
public java.lang.String getFailureRedirectionUrl();
```

- *Type:* java.lang.String

---

##### `fromEmailAddress`<sup>Required</sup> <a name="fromEmailAddress" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fromEmailAddress"></a>

```java
public java.lang.String getFromEmailAddress();
```

- *Type:* java.lang.String

---

##### `successRedirectionUrl`<sup>Required</sup> <a name="successRedirectionUrl" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.successRedirectionUrl"></a>

```java
public java.lang.String getSuccessRedirectionUrl();
```

- *Type:* java.lang.String

---

##### `templateContent`<sup>Required</sup> <a name="templateContent" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateContent"></a>

```java
public java.lang.String getTemplateContent();
```

- *Type:* java.lang.String

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

---

##### `templateSubject`<sup>Required</sup> <a name="templateSubject" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateSubject"></a>

```java
public java.lang.String getTemplateSubject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SesCustomVerificationEmailTemplateConfig <a name="SesCustomVerificationEmailTemplateConfig" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_custom_verification_email_template.SesCustomVerificationEmailTemplateConfig;

SesCustomVerificationEmailTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .failureRedirectionUrl(java.lang.String)
    .fromEmailAddress(java.lang.String)
    .successRedirectionUrl(java.lang.String)
    .templateContent(java.lang.String)
    .templateName(java.lang.String)
    .templateSubject(java.lang.String)
//  .tags(IResolvable|java.util.List<SesCustomVerificationEmailTemplateTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.failureRedirectionUrl">failureRedirectionUrl</a></code> | <code>java.lang.String</code> | The URL that the recipient of the verification email is sent to if his or her address is not successfully verified. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.fromEmailAddress">fromEmailAddress</a></code> | <code>java.lang.String</code> | The email address that the custom verification email is sent from. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.successRedirectionUrl">successRedirectionUrl</a></code> | <code>java.lang.String</code> | The URL that the recipient of the verification email is sent to if his or her address is successfully verified. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateContent">templateContent</a></code> | <code>java.lang.String</code> | The content of the custom verification email. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateName">templateName</a></code> | <code>java.lang.String</code> | The name of the custom verification email template. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateSubject">templateSubject</a></code> | <code>java.lang.String</code> | The subject line of the custom verification email. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>></code> | The tags (keys and values) associated with the tenant. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `failureRedirectionUrl`<sup>Required</sup> <a name="failureRedirectionUrl" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.failureRedirectionUrl"></a>

```java
public java.lang.String getFailureRedirectionUrl();
```

- *Type:* java.lang.String

The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#failure_redirection_url SesCustomVerificationEmailTemplate#failure_redirection_url}

---

##### `fromEmailAddress`<sup>Required</sup> <a name="fromEmailAddress" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.fromEmailAddress"></a>

```java
public java.lang.String getFromEmailAddress();
```

- *Type:* java.lang.String

The email address that the custom verification email is sent from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#from_email_address SesCustomVerificationEmailTemplate#from_email_address}

---

##### `successRedirectionUrl`<sup>Required</sup> <a name="successRedirectionUrl" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.successRedirectionUrl"></a>

```java
public java.lang.String getSuccessRedirectionUrl();
```

- *Type:* java.lang.String

The URL that the recipient of the verification email is sent to if his or her address is successfully verified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#success_redirection_url SesCustomVerificationEmailTemplate#success_redirection_url}

---

##### `templateContent`<sup>Required</sup> <a name="templateContent" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateContent"></a>

```java
public java.lang.String getTemplateContent();
```

- *Type:* java.lang.String

The content of the custom verification email.

The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#template_content SesCustomVerificationEmailTemplate#template_content}

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

The name of the custom verification email template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#template_name SesCustomVerificationEmailTemplate#template_name}

---

##### `templateSubject`<sup>Required</sup> <a name="templateSubject" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateSubject"></a>

```java
public java.lang.String getTemplateSubject();
```

- *Type:* java.lang.String

The subject line of the custom verification email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#template_subject SesCustomVerificationEmailTemplate#template_subject}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SesCustomVerificationEmailTemplateTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>>

The tags (keys and values) associated with the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#tags SesCustomVerificationEmailTemplate#tags}

---

### SesCustomVerificationEmailTemplateTags <a name="SesCustomVerificationEmailTemplateTags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_custom_verification_email_template.SesCustomVerificationEmailTemplateTags;

SesCustomVerificationEmailTemplateTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the key-value tag. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the key-value tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the key-value tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#key SesCustomVerificationEmailTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the key-value tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_custom_verification_email_template#value SesCustomVerificationEmailTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SesCustomVerificationEmailTemplateTagsList <a name="SesCustomVerificationEmailTemplateTagsList" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_custom_verification_email_template.SesCustomVerificationEmailTemplateTagsList;

new SesCustomVerificationEmailTemplateTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.get"></a>

```java
public SesCustomVerificationEmailTemplateTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SesCustomVerificationEmailTemplateTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>>

---


### SesCustomVerificationEmailTemplateTagsOutputReference <a name="SesCustomVerificationEmailTemplateTagsOutputReference" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_custom_verification_email_template.SesCustomVerificationEmailTemplateTagsOutputReference;

new SesCustomVerificationEmailTemplateTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SesCustomVerificationEmailTemplateTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>

---



