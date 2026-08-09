# `observabilityadminS3TableIntegration` Submodule <a name="`observabilityadminS3TableIntegration` Submodule" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityadminS3TableIntegration <a name="ObservabilityadminS3TableIntegration" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_s3_table_integration awscc_observabilityadmin_s3_table_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer"></a>

```java
import io.cdktn.providers.awscc.observabilityadmin_s3_table_integration.ObservabilityadminS3TableIntegration;

ObservabilityadminS3TableIntegration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .encryption(ObservabilityadminS3TableIntegrationEncryption)
    .roleArn(java.lang.String)
//  .logSources(IResolvable|java.util.List<ObservabilityadminS3TableIntegrationLogSources>)
//  .tags(IResolvable|java.util.List<ObservabilityadminS3TableIntegrationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a></code> | Encryption configuration for the S3 Table Integration. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of the role used to access the S3 Table Integration. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.logSources">logSources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources">ObservabilityadminS3TableIntegrationLogSources</a>></code> | The CloudWatch Logs data sources to associate with the S3 Table Integration. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags">ObservabilityadminS3TableIntegrationTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.encryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>

Encryption configuration for the S3 Table Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_s3_table_integration#encryption ObservabilityadminS3TableIntegration#encryption}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The ARN of the role used to access the S3 Table Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_s3_table_integration#role_arn ObservabilityadminS3TableIntegration#role_arn}

---

##### `logSources`<sup>Optional</sup> <a name="logSources" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.logSources"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources">ObservabilityadminS3TableIntegrationLogSources</a>>

The CloudWatch Logs data sources to associate with the S3 Table Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_s3_table_integration#log_sources ObservabilityadminS3TableIntegration#log_sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags">ObservabilityadminS3TableIntegrationTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_s3_table_integration#tags ObservabilityadminS3TableIntegration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putLogSources">putLogSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetLogSources">resetLogSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryption` <a name="putEncryption" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putEncryption"></a>

```java
public void putEncryption(ObservabilityadminS3TableIntegrationEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>

---

##### `putLogSources` <a name="putLogSources" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putLogSources"></a>

```java
public void putLogSources(IResolvable|java.util.List<ObservabilityadminS3TableIntegrationLogSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putLogSources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources">ObservabilityadminS3TableIntegrationLogSources</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ObservabilityadminS3TableIntegrationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags">ObservabilityadminS3TableIntegrationTags</a>>

---

##### `resetLogSources` <a name="resetLogSources" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetLogSources"></a>

```java
public void resetLogSources()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityadminS3TableIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.observabilityadmin_s3_table_integration.ObservabilityadminS3TableIntegration;

ObservabilityadminS3TableIntegration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.observabilityadmin_s3_table_integration.ObservabilityadminS3TableIntegration;

ObservabilityadminS3TableIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.observabilityadmin_s3_table_integration.ObservabilityadminS3TableIntegration;

ObservabilityadminS3TableIntegration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.observabilityadmin_s3_table_integration.ObservabilityadminS3TableIntegration;

ObservabilityadminS3TableIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ObservabilityadminS3TableIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ObservabilityadminS3TableIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ObservabilityadminS3TableIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ObservabilityadminS3TableIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_s3_table_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityadminS3TableIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference">ObservabilityadminS3TableIntegrationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.logSources">logSources</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList">ObservabilityadminS3TableIntegrationLogSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList">ObservabilityadminS3TableIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.encryptionInput">encryptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.logSourcesInput">logSourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources">ObservabilityadminS3TableIntegrationLogSources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags">ObservabilityadminS3TableIntegrationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.encryption"></a>

```java
public ObservabilityadminS3TableIntegrationEncryptionOutputReference getEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference">ObservabilityadminS3TableIntegrationEncryptionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logSources`<sup>Required</sup> <a name="logSources" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.logSources"></a>

```java
public ObservabilityadminS3TableIntegrationLogSourcesList getLogSources();
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList">ObservabilityadminS3TableIntegrationLogSourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tags"></a>

```java
public ObservabilityadminS3TableIntegrationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList">ObservabilityadminS3TableIntegrationTagsList</a>

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.encryptionInput"></a>

```java
public IResolvable|ObservabilityadminS3TableIntegrationEncryption getEncryptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>

---

##### `logSourcesInput`<sup>Optional</sup> <a name="logSourcesInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.logSourcesInput"></a>

```java
public IResolvable|java.util.List<ObservabilityadminS3TableIntegrationLogSources> getLogSourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources">ObservabilityadminS3TableIntegrationLogSources</a>>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ObservabilityadminS3TableIntegrationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags">ObservabilityadminS3TableIntegrationTags</a>>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityadminS3TableIntegrationConfig <a name="ObservabilityadminS3TableIntegrationConfig" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.observabilityadmin_s3_table_integration.ObservabilityadminS3TableIntegrationConfig;

ObservabilityadminS3TableIntegrationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .encryption(ObservabilityadminS3TableIntegrationEncryption)
    .roleArn(java.lang.String)
//  .logSources(IResolvable|java.util.List<ObservabilityadminS3TableIntegrationLogSources>)
//  .tags(IResolvable|java.util.List<ObservabilityadminS3TableIntegrationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a></code> | Encryption configuration for the S3 Table Integration. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of the role used to access the S3 Table Integration. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.logSources">logSources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources">ObservabilityadminS3TableIntegrationLogSources</a>></code> | The CloudWatch Logs data sources to associate with the S3 Table Integration. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags">ObservabilityadminS3TableIntegrationTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.encryption"></a>

```java
public ObservabilityadminS3TableIntegrationEncryption getEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>

Encryption configuration for the S3 Table Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_s3_table_integration#encryption ObservabilityadminS3TableIntegration#encryption}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The ARN of the role used to access the S3 Table Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_s3_table_integration#role_arn ObservabilityadminS3TableIntegration#role_arn}

---

##### `logSources`<sup>Optional</sup> <a name="logSources" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.logSources"></a>

```java
public IResolvable|java.util.List<ObservabilityadminS3TableIntegrationLogSources> getLogSources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources">ObservabilityadminS3TableIntegrationLogSources</a>>

The CloudWatch Logs data sources to associate with the S3 Table Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_s3_table_integration#log_sources ObservabilityadminS3TableIntegration#log_sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ObservabilityadminS3TableIntegrationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags">ObservabilityadminS3TableIntegrationTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_s3_table_integration#tags ObservabilityadminS3TableIntegration#tags}

---

### ObservabilityadminS3TableIntegrationEncryption <a name="ObservabilityadminS3TableIntegrationEncryption" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption.Initializer"></a>

```java
import io.cdktn.providers.awscc.observabilityadmin_s3_table_integration.ObservabilityadminS3TableIntegrationEncryption;

ObservabilityadminS3TableIntegrationEncryption.builder()
    .sseAlgorithm(java.lang.String)
//  .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption.property.sseAlgorithm">sseAlgorithm</a></code> | <code>java.lang.String</code> | The server-side encryption algorithm used to encrypt the S3 Table(s) data. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key used to encrypt the S3 Table Integration. |

---

##### `sseAlgorithm`<sup>Required</sup> <a name="sseAlgorithm" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption.property.sseAlgorithm"></a>

```java
public java.lang.String getSseAlgorithm();
```

- *Type:* java.lang.String

The server-side encryption algorithm used to encrypt the S3 Table(s) data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_s3_table_integration#sse_algorithm ObservabilityadminS3TableIntegration#sse_algorithm}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

The ARN of the KMS key used to encrypt the S3 Table Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_s3_table_integration#kms_key_arn ObservabilityadminS3TableIntegration#kms_key_arn}

---

### ObservabilityadminS3TableIntegrationLogSources <a name="ObservabilityadminS3TableIntegrationLogSources" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources.Initializer"></a>

```java
import io.cdktn.providers.awscc.observabilityadmin_s3_table_integration.ObservabilityadminS3TableIntegrationLogSources;

ObservabilityadminS3TableIntegrationLogSources.builder()
//  .identifier(java.lang.String)
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources.property.identifier">identifier</a></code> | <code>java.lang.String</code> | The ID of the CloudWatch Logs data source association. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources.property.name">name</a></code> | <code>java.lang.String</code> | The name of the CloudWatch Logs data source. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources.property.type">type</a></code> | <code>java.lang.String</code> | The type of the CloudWatch Logs data source. |

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

The ID of the CloudWatch Logs data source association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_s3_table_integration#identifier ObservabilityadminS3TableIntegration#identifier}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the CloudWatch Logs data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_s3_table_integration#name ObservabilityadminS3TableIntegration#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the CloudWatch Logs data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_s3_table_integration#type ObservabilityadminS3TableIntegration#type}

---

### ObservabilityadminS3TableIntegrationTags <a name="ObservabilityadminS3TableIntegrationTags" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.observabilityadmin_s3_table_integration.ObservabilityadminS3TableIntegrationTags;

ObservabilityadminS3TableIntegrationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_s3_table_integration#key ObservabilityadminS3TableIntegration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_s3_table_integration#value ObservabilityadminS3TableIntegration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityadminS3TableIntegrationEncryptionOutputReference <a name="ObservabilityadminS3TableIntegrationEncryptionOutputReference" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.observabilityadmin_s3_table_integration.ObservabilityadminS3TableIntegrationEncryptionOutputReference;

new ObservabilityadminS3TableIntegrationEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.sseAlgorithmInput">sseAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.sseAlgorithm">sseAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `sseAlgorithmInput`<sup>Optional</sup> <a name="sseAlgorithmInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.sseAlgorithmInput"></a>

```java
public java.lang.String getSseAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `sseAlgorithm`<sup>Required</sup> <a name="sseAlgorithm" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.sseAlgorithm"></a>

```java
public java.lang.String getSseAlgorithm();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.internalValue"></a>

```java
public IResolvable|ObservabilityadminS3TableIntegrationEncryption getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>

---


### ObservabilityadminS3TableIntegrationLogSourcesList <a name="ObservabilityadminS3TableIntegrationLogSourcesList" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.observabilityadmin_s3_table_integration.ObservabilityadminS3TableIntegrationLogSourcesList;

new ObservabilityadminS3TableIntegrationLogSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.get"></a>

```java
public ObservabilityadminS3TableIntegrationLogSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources">ObservabilityadminS3TableIntegrationLogSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ObservabilityadminS3TableIntegrationLogSources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources">ObservabilityadminS3TableIntegrationLogSources</a>>

---


### ObservabilityadminS3TableIntegrationLogSourcesOutputReference <a name="ObservabilityadminS3TableIntegrationLogSourcesOutputReference" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.observabilityadmin_s3_table_integration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference;

new ObservabilityadminS3TableIntegrationLogSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.resetIdentifier"></a>

```java
public void resetIdentifier()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources">ObservabilityadminS3TableIntegrationLogSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|ObservabilityadminS3TableIntegrationLogSources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationLogSources">ObservabilityadminS3TableIntegrationLogSources</a>

---


### ObservabilityadminS3TableIntegrationTagsList <a name="ObservabilityadminS3TableIntegrationTagsList" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.observabilityadmin_s3_table_integration.ObservabilityadminS3TableIntegrationTagsList;

new ObservabilityadminS3TableIntegrationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.get"></a>

```java
public ObservabilityadminS3TableIntegrationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags">ObservabilityadminS3TableIntegrationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ObservabilityadminS3TableIntegrationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags">ObservabilityadminS3TableIntegrationTags</a>>

---


### ObservabilityadminS3TableIntegrationTagsOutputReference <a name="ObservabilityadminS3TableIntegrationTagsOutputReference" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.observabilityadmin_s3_table_integration.ObservabilityadminS3TableIntegrationTagsOutputReference;

new ObservabilityadminS3TableIntegrationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags">ObservabilityadminS3TableIntegrationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ObservabilityadminS3TableIntegrationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTags">ObservabilityadminS3TableIntegrationTags</a>

---



