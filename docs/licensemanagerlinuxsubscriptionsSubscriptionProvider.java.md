# `licensemanagerlinuxsubscriptionsSubscriptionProvider` Submodule <a name="`licensemanagerlinuxsubscriptionsSubscriptionProvider` Submodule" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerlinuxsubscriptionsSubscriptionProvider <a name="LicensemanagerlinuxsubscriptionsSubscriptionProvider" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider awscc_licensemanagerlinuxsubscriptions_subscription_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanagerlinuxsubscriptions_subscription_provider.LicensemanagerlinuxsubscriptionsSubscriptionProvider;

LicensemanagerlinuxsubscriptionsSubscriptionProvider.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .secretArn(java.lang.String)
    .subscriptionProviderSource(java.lang.String)
//  .tags(IResolvable|java.util.List<LicensemanagerlinuxsubscriptionsSubscriptionProviderTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.secretArn">secretArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Secrets Manager secret that contains the access token for the third-party Linux subscription provider. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.subscriptionProviderSource">subscriptionProviderSource</a></code> | <code>java.lang.String</code> | The Linux subscription provider that the registration is for. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>></code> | The metadata tags assigned to the registered subscription provider. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.secretArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Secrets Manager secret that contains the access token for the third-party Linux subscription provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#secret_arn LicensemanagerlinuxsubscriptionsSubscriptionProvider#secret_arn}

---

##### `subscriptionProviderSource`<sup>Required</sup> <a name="subscriptionProviderSource" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.subscriptionProviderSource"></a>

- *Type:* java.lang.String

The Linux subscription provider that the registration is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#subscription_provider_source LicensemanagerlinuxsubscriptionsSubscriptionProvider#subscription_provider_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>>

The metadata tags assigned to the registered subscription provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#tags LicensemanagerlinuxsubscriptionsSubscriptionProvider#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<LicensemanagerlinuxsubscriptionsSubscriptionProviderTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LicensemanagerlinuxsubscriptionsSubscriptionProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isConstruct"></a>

```java
import io.cdktn.providers.awscc.licensemanagerlinuxsubscriptions_subscription_provider.LicensemanagerlinuxsubscriptionsSubscriptionProvider;

LicensemanagerlinuxsubscriptionsSubscriptionProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.licensemanagerlinuxsubscriptions_subscription_provider.LicensemanagerlinuxsubscriptionsSubscriptionProvider;

LicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.licensemanagerlinuxsubscriptions_subscription_provider.LicensemanagerlinuxsubscriptionsSubscriptionProvider;

LicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.licensemanagerlinuxsubscriptions_subscription_provider.LicensemanagerlinuxsubscriptionsSubscriptionProvider;

LicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LicensemanagerlinuxsubscriptionsSubscriptionProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LicensemanagerlinuxsubscriptionsSubscriptionProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LicensemanagerlinuxsubscriptionsSubscriptionProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerlinuxsubscriptionsSubscriptionProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.lastSuccessfulDataRetrievalTime">lastSuccessfulDataRetrievalTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderArn">subscriptionProviderArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderStatus">subscriptionProviderStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderStatusMessage">subscriptionProviderStatusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList">LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderSourceInput">subscriptionProviderSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderSource">subscriptionProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastSuccessfulDataRetrievalTime`<sup>Required</sup> <a name="lastSuccessfulDataRetrievalTime" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.lastSuccessfulDataRetrievalTime"></a>

```java
public java.lang.String getLastSuccessfulDataRetrievalTime();
```

- *Type:* java.lang.String

---

##### `subscriptionProviderArn`<sup>Required</sup> <a name="subscriptionProviderArn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderArn"></a>

```java
public java.lang.String getSubscriptionProviderArn();
```

- *Type:* java.lang.String

---

##### `subscriptionProviderStatus`<sup>Required</sup> <a name="subscriptionProviderStatus" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderStatus"></a>

```java
public java.lang.String getSubscriptionProviderStatus();
```

- *Type:* java.lang.String

---

##### `subscriptionProviderStatusMessage`<sup>Required</sup> <a name="subscriptionProviderStatusMessage" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderStatusMessage"></a>

```java
public java.lang.String getSubscriptionProviderStatusMessage();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tags"></a>

```java
public LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList">LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList</a>

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `subscriptionProviderSourceInput`<sup>Optional</sup> <a name="subscriptionProviderSourceInput" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderSourceInput"></a>

```java
public java.lang.String getSubscriptionProviderSourceInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tagsInput"></a>

```java
public IResolvable|java.util.List<LicensemanagerlinuxsubscriptionsSubscriptionProviderTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>>

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `subscriptionProviderSource`<sup>Required</sup> <a name="subscriptionProviderSource" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderSource"></a>

```java
public java.lang.String getSubscriptionProviderSource();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig <a name="LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanagerlinuxsubscriptions_subscription_provider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig;

LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .secretArn(java.lang.String)
    .subscriptionProviderSource(java.lang.String)
//  .tags(IResolvable|java.util.List<LicensemanagerlinuxsubscriptionsSubscriptionProviderTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Secrets Manager secret that contains the access token for the third-party Linux subscription provider. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.subscriptionProviderSource">subscriptionProviderSource</a></code> | <code>java.lang.String</code> | The Linux subscription provider that the registration is for. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>></code> | The metadata tags assigned to the registered subscription provider. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Secrets Manager secret that contains the access token for the third-party Linux subscription provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#secret_arn LicensemanagerlinuxsubscriptionsSubscriptionProvider#secret_arn}

---

##### `subscriptionProviderSource`<sup>Required</sup> <a name="subscriptionProviderSource" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.subscriptionProviderSource"></a>

```java
public java.lang.String getSubscriptionProviderSource();
```

- *Type:* java.lang.String

The Linux subscription provider that the registration is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#subscription_provider_source LicensemanagerlinuxsubscriptionsSubscriptionProvider#subscription_provider_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.tags"></a>

```java
public IResolvable|java.util.List<LicensemanagerlinuxsubscriptionsSubscriptionProviderTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>>

The metadata tags assigned to the registered subscription provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#tags LicensemanagerlinuxsubscriptionsSubscriptionProvider#tags}

---

### LicensemanagerlinuxsubscriptionsSubscriptionProviderTags <a name="LicensemanagerlinuxsubscriptionsSubscriptionProviderTags" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanagerlinuxsubscriptions_subscription_provider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags;

LicensemanagerlinuxsubscriptionsSubscriptionProviderTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#key LicensemanagerlinuxsubscriptionsSubscriptionProvider#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#value LicensemanagerlinuxsubscriptionsSubscriptionProvider#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList <a name="LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanagerlinuxsubscriptions_subscription_provider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList;

new LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.get"></a>

```java
public LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LicensemanagerlinuxsubscriptionsSubscriptionProviderTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>>

---


### LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference <a name="LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.licensemanagerlinuxsubscriptions_subscription_provider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference;

new LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|LicensemanagerlinuxsubscriptionsSubscriptionProviderTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>

---



