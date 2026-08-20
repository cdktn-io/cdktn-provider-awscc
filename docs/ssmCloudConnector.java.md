# `ssmCloudConnector` Submodule <a name="`ssmCloudConnector` Submodule" id="@cdktn/provider-awscc.ssmCloudConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmCloudConnector <a name="SsmCloudConnector" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector awscc_ssm_cloud_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_cloud_connector.SsmCloudConnector;

SsmCloudConnector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configConnectorArn(java.lang.String)
    .configuration(SsmCloudConnectorConfiguration)
    .displayName(java.lang.String)
    .roleArn(java.lang.String)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<SsmCloudConnectorTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.configConnectorArn">configConnectorArn</a></code> | <code>java.lang.String</code> | The ARN of the AWS Config connector. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a></code> | The configuration for the cloud connector. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the cloud connector. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The IAM role ARN used by the cloud connector. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the cloud connector. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>></code> | Tags to apply to the cloud connector. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configConnectorArn`<sup>Required</sup> <a name="configConnectorArn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.configConnectorArn"></a>

- *Type:* java.lang.String

The ARN of the AWS Config connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#config_connector_arn SsmCloudConnector#config_connector_arn}

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a>

The configuration for the cloud connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#configuration SsmCloudConnector#configuration}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the cloud connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#display_name SsmCloudConnector#display_name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The IAM role ARN used by the cloud connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#role_arn SsmCloudConnector#role_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the cloud connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#description SsmCloudConnector#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>>

Tags to apply to the cloud connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#tags SsmCloudConnector#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.putConfiguration"></a>

```java
public void putConfiguration(SsmCloudConnectorConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SsmCloudConnectorTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmCloudConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ssm_cloud_connector.SsmCloudConnector;

SsmCloudConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ssm_cloud_connector.SsmCloudConnector;

SsmCloudConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ssm_cloud_connector.SsmCloudConnector;

SsmCloudConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ssm_cloud_connector.SsmCloudConnector;

SsmCloudConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SsmCloudConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SsmCloudConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SsmCloudConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SsmCloudConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SsmCloudConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.cloudConnectorArn">cloudConnectorArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.cloudConnectorId">cloudConnectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference">SsmCloudConnectorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList">SsmCloudConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configConnectorArnInput">configConnectorArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configurationInput">configurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configConnectorArn">configConnectorArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudConnectorArn`<sup>Required</sup> <a name="cloudConnectorArn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.cloudConnectorArn"></a>

```java
public java.lang.String getCloudConnectorArn();
```

- *Type:* java.lang.String

---

##### `cloudConnectorId`<sup>Required</sup> <a name="cloudConnectorId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.cloudConnectorId"></a>

```java
public java.lang.String getCloudConnectorId();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configuration"></a>

```java
public SsmCloudConnectorConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference">SsmCloudConnectorConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.tags"></a>

```java
public SsmCloudConnectorTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList">SsmCloudConnectorTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `configConnectorArnInput`<sup>Optional</sup> <a name="configConnectorArnInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configConnectorArnInput"></a>

```java
public java.lang.String getConfigConnectorArnInput();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configurationInput"></a>

```java
public IResolvable|SsmCloudConnectorConfiguration getConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SsmCloudConnectorTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>>

---

##### `configConnectorArn`<sup>Required</sup> <a name="configConnectorArn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.configConnectorArn"></a>

```java
public java.lang.String getConfigConnectorArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsmCloudConnectorConfig <a name="SsmCloudConnectorConfig" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_cloud_connector.SsmCloudConnectorConfig;

SsmCloudConnectorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configConnectorArn(java.lang.String)
    .configuration(SsmCloudConnectorConfiguration)
    .displayName(java.lang.String)
    .roleArn(java.lang.String)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<SsmCloudConnectorTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.configConnectorArn">configConnectorArn</a></code> | <code>java.lang.String</code> | The ARN of the AWS Config connector. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a></code> | The configuration for the cloud connector. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the cloud connector. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The IAM role ARN used by the cloud connector. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the cloud connector. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>></code> | Tags to apply to the cloud connector. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configConnectorArn`<sup>Required</sup> <a name="configConnectorArn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.configConnectorArn"></a>

```java
public java.lang.String getConfigConnectorArn();
```

- *Type:* java.lang.String

The ARN of the AWS Config connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#config_connector_arn SsmCloudConnector#config_connector_arn}

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.configuration"></a>

```java
public SsmCloudConnectorConfiguration getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a>

The configuration for the cloud connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#configuration SsmCloudConnector#configuration}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the cloud connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#display_name SsmCloudConnector#display_name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The IAM role ARN used by the cloud connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#role_arn SsmCloudConnector#role_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the cloud connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#description SsmCloudConnector#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SsmCloudConnectorTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>>

Tags to apply to the cloud connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#tags SsmCloudConnector#tags}

---

### SsmCloudConnectorConfiguration <a name="SsmCloudConnectorConfiguration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_cloud_connector.SsmCloudConnectorConfiguration;

SsmCloudConnectorConfiguration.builder()
    .azureConfiguration(SsmCloudConnectorConfigurationAzureConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration.property.azureConfiguration">azureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a></code> | Configuration for connecting to Azure. |

---

##### `azureConfiguration`<sup>Required</sup> <a name="azureConfiguration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration.property.azureConfiguration"></a>

```java
public SsmCloudConnectorConfigurationAzureConfiguration getAzureConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a>

Configuration for connecting to Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#azure_configuration SsmCloudConnector#azure_configuration}

---

### SsmCloudConnectorConfigurationAzureConfiguration <a name="SsmCloudConnectorConfigurationAzureConfiguration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_cloud_connector.SsmCloudConnectorConfigurationAzureConfiguration;

SsmCloudConnectorConfigurationAzureConfiguration.builder()
    .applicationId(java.lang.String)
    .tenantId(java.lang.String)
//  .applicationDisplayName(java.lang.String)
//  .targets(SsmCloudConnectorConfigurationAzureConfigurationTargets)
//  .tenantDisplayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The Azure AD application ID. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The Azure AD tenant ID. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.applicationDisplayName">applicationDisplayName</a></code> | <code>java.lang.String</code> | The display name of the Azure AD application. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a></code> | The targets for the cloud connector. If omitted, the entire tenant is targeted. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.tenantDisplayName">tenantDisplayName</a></code> | <code>java.lang.String</code> | The display name of the Azure AD tenant. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

The Azure AD application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#application_id SsmCloudConnector#application_id}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

The Azure AD tenant ID. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#tenant_id SsmCloudConnector#tenant_id}

---

##### `applicationDisplayName`<sup>Optional</sup> <a name="applicationDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.applicationDisplayName"></a>

```java
public java.lang.String getApplicationDisplayName();
```

- *Type:* java.lang.String

The display name of the Azure AD application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#application_display_name SsmCloudConnector#application_display_name}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.targets"></a>

```java
public SsmCloudConnectorConfigurationAzureConfigurationTargets getTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a>

The targets for the cloud connector. If omitted, the entire tenant is targeted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#targets SsmCloudConnector#targets}

---

##### `tenantDisplayName`<sup>Optional</sup> <a name="tenantDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration.property.tenantDisplayName"></a>

```java
public java.lang.String getTenantDisplayName();
```

- *Type:* java.lang.String

The display name of the Azure AD tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#tenant_display_name SsmCloudConnector#tenant_display_name}

---

### SsmCloudConnectorConfigurationAzureConfigurationTargets <a name="SsmCloudConnectorConfigurationAzureConfigurationTargets" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_cloud_connector.SsmCloudConnectorConfigurationAzureConfigurationTargets;

SsmCloudConnectorConfigurationAzureConfigurationTargets.builder()
//  .subscriptions(IResolvable|java.util.List<SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets.property.subscriptions">subscriptions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>></code> | List of Azure subscriptions. |

---

##### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets.property.subscriptions"></a>

```java
public IResolvable|java.util.List<SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions> getSubscriptions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>>

List of Azure subscriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#subscriptions SsmCloudConnector#subscriptions}

---

### SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions <a name="SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_cloud_connector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions;

SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions.builder()
//  .displayName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Azure subscription. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions.property.id">id</a></code> | <code>java.lang.String</code> | The Azure subscription ID. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the Azure subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#display_name SsmCloudConnector#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The Azure subscription ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#id SsmCloudConnector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SsmCloudConnectorTags <a name="SsmCloudConnectorTags" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_cloud_connector.SsmCloudConnectorTags;

SsmCloudConnectorTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#key SsmCloudConnector#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#value SsmCloudConnector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#key SsmCloudConnector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_cloud_connector#value SsmCloudConnector#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmCloudConnectorConfigurationAzureConfigurationOutputReference <a name="SsmCloudConnectorConfigurationAzureConfigurationOutputReference" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_cloud_connector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference;

new SsmCloudConnectorConfigurationAzureConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resetApplicationDisplayName">resetApplicationDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resetTargets">resetTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resetTenantDisplayName">resetTenantDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargets` <a name="putTargets" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.putTargets"></a>

```java
public void putTargets(SsmCloudConnectorConfigurationAzureConfigurationTargets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.putTargets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a>

---

##### `resetApplicationDisplayName` <a name="resetApplicationDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resetApplicationDisplayName"></a>

```java
public void resetApplicationDisplayName()
```

##### `resetTargets` <a name="resetTargets" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resetTargets"></a>

```java
public void resetTargets()
```

##### `resetTenantDisplayName` <a name="resetTenantDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.resetTenantDisplayName"></a>

```java
public void resetTenantDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference">SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationDisplayNameInput">applicationDisplayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.targetsInput">targetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantDisplayNameInput">tenantDisplayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationDisplayName">applicationDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantDisplayName">tenantDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.targets"></a>

```java
public SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference getTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference">SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference</a>

---

##### `applicationDisplayNameInput`<sup>Optional</sup> <a name="applicationDisplayNameInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationDisplayNameInput"></a>

```java
public java.lang.String getApplicationDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.targetsInput"></a>

```java
public IResolvable|SsmCloudConnectorConfigurationAzureConfigurationTargets getTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a>

---

##### `tenantDisplayNameInput`<sup>Optional</sup> <a name="tenantDisplayNameInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantDisplayNameInput"></a>

```java
public java.lang.String getTenantDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `applicationDisplayName`<sup>Required</sup> <a name="applicationDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationDisplayName"></a>

```java
public java.lang.String getApplicationDisplayName();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `tenantDisplayName`<sup>Required</sup> <a name="tenantDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantDisplayName"></a>

```java
public java.lang.String getTenantDisplayName();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmCloudConnectorConfigurationAzureConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a>

---


### SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference <a name="SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_cloud_connector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference;

new SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.putSubscriptions">putSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.resetSubscriptions">resetSubscriptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubscriptions` <a name="putSubscriptions" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.putSubscriptions"></a>

```java
public void putSubscriptions(IResolvable|java.util.List<SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.putSubscriptions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>>

---

##### `resetSubscriptions` <a name="resetSubscriptions" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.resetSubscriptions"></a>

```java
public void resetSubscriptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.subscriptions">subscriptions</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.subscriptionsInput">subscriptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subscriptions`<sup>Required</sup> <a name="subscriptions" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.subscriptions"></a>

```java
public SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList getSubscriptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList</a>

---

##### `subscriptionsInput`<sup>Optional</sup> <a name="subscriptionsInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.subscriptionsInput"></a>

```java
public IResolvable|java.util.List<SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions> getSubscriptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmCloudConnectorConfigurationAzureConfigurationTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargets">SsmCloudConnectorConfigurationAzureConfigurationTargets</a>

---


### SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList <a name="SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_cloud_connector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList;

new SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.get"></a>

```java
public SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>>

---


### SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference <a name="SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_cloud_connector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference;

new SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions">SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions</a>

---


### SsmCloudConnectorConfigurationOutputReference <a name="SsmCloudConnectorConfigurationOutputReference" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_cloud_connector.SsmCloudConnectorConfigurationOutputReference;

new SsmCloudConnectorConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.putAzureConfiguration">putAzureConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureConfiguration` <a name="putAzureConfiguration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.putAzureConfiguration"></a>

```java
public void putAzureConfiguration(SsmCloudConnectorConfigurationAzureConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.putAzureConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.azureConfiguration">azureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference">SsmCloudConnectorConfigurationAzureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.azureConfigurationInput">azureConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureConfiguration`<sup>Required</sup> <a name="azureConfiguration" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.azureConfiguration"></a>

```java
public SsmCloudConnectorConfigurationAzureConfigurationOutputReference getAzureConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfigurationOutputReference">SsmCloudConnectorConfigurationAzureConfigurationOutputReference</a>

---

##### `azureConfigurationInput`<sup>Optional</sup> <a name="azureConfigurationInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.azureConfigurationInput"></a>

```java
public IResolvable|SsmCloudConnectorConfigurationAzureConfiguration getAzureConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationAzureConfiguration">SsmCloudConnectorConfigurationAzureConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmCloudConnectorConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorConfiguration">SsmCloudConnectorConfiguration</a>

---


### SsmCloudConnectorTagsList <a name="SsmCloudConnectorTagsList" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_cloud_connector.SsmCloudConnectorTagsList;

new SsmCloudConnectorTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.get"></a>

```java
public SsmCloudConnectorTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmCloudConnectorTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>>

---


### SsmCloudConnectorTagsOutputReference <a name="SsmCloudConnectorTagsOutputReference" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_cloud_connector.SsmCloudConnectorTagsOutputReference;

new SsmCloudConnectorTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmCloudConnectorTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmCloudConnector.SsmCloudConnectorTags">SsmCloudConnectorTags</a>

---



