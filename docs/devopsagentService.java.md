# `devopsagentService` Submodule <a name="`devopsagentService` Submodule" id="@cdktn/provider-awscc.devopsagentService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentService <a name="DevopsagentService" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service awscc_devopsagent_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentService;

DevopsagentService.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .serviceType(java.lang.String)
//  .exchangeUrlPrivateConnectionName(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .privateConnectionName(java.lang.String)
//  .serviceDetails(DevopsagentServiceServiceDetails)
//  .tags(IResolvable|java.util.List<DevopsagentServiceTags>)
//  .targetUrlPrivateConnectionName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.serviceType">serviceType</a></code> | <code>java.lang.String</code> | The type of service being registered. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.exchangeUrlPrivateConnectionName">exchangeUrlPrivateConnectionName</a></code> | <code>java.lang.String</code> | The name of the private connection to use for OAuth token exchange requests only. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key to use for encryption. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.privateConnectionName">privateConnectionName</a></code> | <code>java.lang.String</code> | The name of the private connection to use for VPC connectivity. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.serviceDetails">serviceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a></code> | Service-specific configuration details for create operation. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.targetUrlPrivateConnectionName">targetUrlPrivateConnectionName</a></code> | <code>java.lang.String</code> | The name of the private connection to use for API calls (target URL) only. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.serviceType"></a>

- *Type:* java.lang.String

The type of service being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#service_type DevopsagentService#service_type}

---

##### `exchangeUrlPrivateConnectionName`<sup>Optional</sup> <a name="exchangeUrlPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.exchangeUrlPrivateConnectionName"></a>

- *Type:* java.lang.String

The name of the private connection to use for OAuth token exchange requests only.

Cannot be specified when PrivateConnectionName is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#exchange_url_private_connection_name DevopsagentService#exchange_url_private_connection_name}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#kms_key_arn DevopsagentService#kms_key_arn}

---

##### `privateConnectionName`<sup>Optional</sup> <a name="privateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.privateConnectionName"></a>

- *Type:* java.lang.String

The name of the private connection to use for VPC connectivity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#private_connection_name DevopsagentService#private_connection_name}

---

##### `serviceDetails`<sup>Optional</sup> <a name="serviceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.serviceDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a>

Service-specific configuration details for create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#service_details DevopsagentService#service_details}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#tags DevopsagentService#tags}

---

##### `targetUrlPrivateConnectionName`<sup>Optional</sup> <a name="targetUrlPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.Initializer.parameter.targetUrlPrivateConnectionName"></a>

- *Type:* java.lang.String

The name of the private connection to use for API calls (target URL) only.

Cannot be specified when PrivateConnectionName is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#target_url_private_connection_name DevopsagentService#target_url_private_connection_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails">putServiceDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetExchangeUrlPrivateConnectionName">resetExchangeUrlPrivateConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetPrivateConnectionName">resetPrivateConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetServiceDetails">resetServiceDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetTargetUrlPrivateConnectionName">resetTargetUrlPrivateConnectionName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putServiceDetails` <a name="putServiceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails"></a>

```java
public void putServiceDetails(DevopsagentServiceServiceDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putServiceDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DevopsagentServiceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>>

---

##### `resetExchangeUrlPrivateConnectionName` <a name="resetExchangeUrlPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetExchangeUrlPrivateConnectionName"></a>

```java
public void resetExchangeUrlPrivateConnectionName()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetPrivateConnectionName` <a name="resetPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetPrivateConnectionName"></a>

```java
public void resetPrivateConnectionName()
```

##### `resetServiceDetails` <a name="resetServiceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetServiceDetails"></a>

```java
public void resetServiceDetails()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetUrlPrivateConnectionName` <a name="resetTargetUrlPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.resetTargetUrlPrivateConnectionName"></a>

```java
public void resetTargetUrlPrivateConnectionName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsagentService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isConstruct"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentService;

DevopsagentService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentService;

DevopsagentService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentService;

DevopsagentService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentService;

DevopsagentService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevopsagentService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DevopsagentService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevopsagentService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevopsagentService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.accessibleResources">accessibleResources</a></code> | <code>io.cdktn.cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.additionalServiceDetails">additionalServiceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference">DevopsagentServiceAdditionalServiceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceDetails">serviceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference">DevopsagentServiceServiceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList">DevopsagentServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.exchangeUrlPrivateConnectionNameInput">exchangeUrlPrivateConnectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.privateConnectionNameInput">privateConnectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceDetailsInput">serviceDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceTypeInput">serviceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.targetUrlPrivateConnectionNameInput">targetUrlPrivateConnectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.exchangeUrlPrivateConnectionName">exchangeUrlPrivateConnectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.privateConnectionName">privateConnectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.targetUrlPrivateConnectionName">targetUrlPrivateConnectionName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessibleResources`<sup>Required</sup> <a name="accessibleResources" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.accessibleResources"></a>

```java
public StringMapList getAccessibleResources();
```

- *Type:* io.cdktn.cdktn.StringMapList

---

##### `additionalServiceDetails`<sup>Required</sup> <a name="additionalServiceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.additionalServiceDetails"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsOutputReference getAdditionalServiceDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference">DevopsagentServiceAdditionalServiceDetailsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serviceDetails`<sup>Required</sup> <a name="serviceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceDetails"></a>

```java
public DevopsagentServiceServiceDetailsOutputReference getServiceDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference">DevopsagentServiceServiceDetailsOutputReference</a>

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tags"></a>

```java
public DevopsagentServiceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList">DevopsagentServiceTagsList</a>

---

##### `exchangeUrlPrivateConnectionNameInput`<sup>Optional</sup> <a name="exchangeUrlPrivateConnectionNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.exchangeUrlPrivateConnectionNameInput"></a>

```java
public java.lang.String getExchangeUrlPrivateConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `privateConnectionNameInput`<sup>Optional</sup> <a name="privateConnectionNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.privateConnectionNameInput"></a>

```java
public java.lang.String getPrivateConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `serviceDetailsInput`<sup>Optional</sup> <a name="serviceDetailsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceDetailsInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetails getServiceDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a>

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceTypeInput"></a>

```java
public java.lang.String getServiceTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DevopsagentServiceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>>

---

##### `targetUrlPrivateConnectionNameInput`<sup>Optional</sup> <a name="targetUrlPrivateConnectionNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.targetUrlPrivateConnectionNameInput"></a>

```java
public java.lang.String getTargetUrlPrivateConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `exchangeUrlPrivateConnectionName`<sup>Required</sup> <a name="exchangeUrlPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.exchangeUrlPrivateConnectionName"></a>

```java
public java.lang.String getExchangeUrlPrivateConnectionName();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `privateConnectionName`<sup>Required</sup> <a name="privateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.privateConnectionName"></a>

```java
public java.lang.String getPrivateConnectionName();
```

- *Type:* java.lang.String

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `targetUrlPrivateConnectionName`<sup>Required</sup> <a name="targetUrlPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.targetUrlPrivateConnectionName"></a>

```java
public java.lang.String getTargetUrlPrivateConnectionName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentServiceAdditionalServiceDetails <a name="DevopsagentServiceAdditionalServiceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetails;

DevopsagentServiceAdditionalServiceDetails.builder()
    .build();
```


### DevopsagentServiceAdditionalServiceDetailsAzureIdentity <a name="DevopsagentServiceAdditionalServiceDetailsAzureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentity.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsAzureIdentity;

DevopsagentServiceAdditionalServiceDetailsAzureIdentity.builder()
    .build();
```


### DevopsagentServiceAdditionalServiceDetailsDynatrace <a name="DevopsagentServiceAdditionalServiceDetailsDynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatrace.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsDynatrace;

DevopsagentServiceAdditionalServiceDetailsDynatrace.builder()
    .build();
```


### DevopsagentServiceAdditionalServiceDetailsGitLab <a name="DevopsagentServiceAdditionalServiceDetailsGitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLab.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsGitLab;

DevopsagentServiceAdditionalServiceDetailsGitLab.builder()
    .build();
```


### DevopsagentServiceAdditionalServiceDetailsMcpServer <a name="DevopsagentServiceAdditionalServiceDetailsMcpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServer.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsMcpServer;

DevopsagentServiceAdditionalServiceDetailsMcpServer.builder()
    .build();
```


### DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana;

DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana.builder()
    .build();
```


### DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic;

DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic.builder()
    .build();
```


### DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4 <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4;

DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4.builder()
    .build();
```


### DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk;

DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk.builder()
    .build();
```


### DevopsagentServiceAdditionalServiceDetailsPagerDuty <a name="DevopsagentServiceAdditionalServiceDetailsPagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDuty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDuty.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsPagerDuty;

DevopsagentServiceAdditionalServiceDetailsPagerDuty.builder()
    .build();
```


### DevopsagentServiceAdditionalServiceDetailsServiceNow <a name="DevopsagentServiceAdditionalServiceDetailsServiceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNow.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsServiceNow;

DevopsagentServiceAdditionalServiceDetailsServiceNow.builder()
    .build();
```


### DevopsagentServiceConfig <a name="DevopsagentServiceConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceConfig;

DevopsagentServiceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .serviceType(java.lang.String)
//  .exchangeUrlPrivateConnectionName(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .privateConnectionName(java.lang.String)
//  .serviceDetails(DevopsagentServiceServiceDetails)
//  .tags(IResolvable|java.util.List<DevopsagentServiceTags>)
//  .targetUrlPrivateConnectionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | The type of service being registered. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.exchangeUrlPrivateConnectionName">exchangeUrlPrivateConnectionName</a></code> | <code>java.lang.String</code> | The name of the private connection to use for OAuth token exchange requests only. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key to use for encryption. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.privateConnectionName">privateConnectionName</a></code> | <code>java.lang.String</code> | The name of the private connection to use for VPC connectivity. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.serviceDetails">serviceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a></code> | Service-specific configuration details for create operation. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.targetUrlPrivateConnectionName">targetUrlPrivateConnectionName</a></code> | <code>java.lang.String</code> | The name of the private connection to use for API calls (target URL) only. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

The type of service being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#service_type DevopsagentService#service_type}

---

##### `exchangeUrlPrivateConnectionName`<sup>Optional</sup> <a name="exchangeUrlPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.exchangeUrlPrivateConnectionName"></a>

```java
public java.lang.String getExchangeUrlPrivateConnectionName();
```

- *Type:* java.lang.String

The name of the private connection to use for OAuth token exchange requests only.

Cannot be specified when PrivateConnectionName is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#exchange_url_private_connection_name DevopsagentService#exchange_url_private_connection_name}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#kms_key_arn DevopsagentService#kms_key_arn}

---

##### `privateConnectionName`<sup>Optional</sup> <a name="privateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.privateConnectionName"></a>

```java
public java.lang.String getPrivateConnectionName();
```

- *Type:* java.lang.String

The name of the private connection to use for VPC connectivity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#private_connection_name DevopsagentService#private_connection_name}

---

##### `serviceDetails`<sup>Optional</sup> <a name="serviceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.serviceDetails"></a>

```java
public DevopsagentServiceServiceDetails getServiceDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a>

Service-specific configuration details for create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#service_details DevopsagentService#service_details}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DevopsagentServiceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#tags DevopsagentService#tags}

---

##### `targetUrlPrivateConnectionName`<sup>Optional</sup> <a name="targetUrlPrivateConnectionName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceConfig.property.targetUrlPrivateConnectionName"></a>

```java
public java.lang.String getTargetUrlPrivateConnectionName();
```

- *Type:* java.lang.String

The name of the private connection to use for API calls (target URL) only.

Cannot be specified when PrivateConnectionName is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#target_url_private_connection_name DevopsagentService#target_url_private_connection_name}

---

### DevopsagentServiceServiceDetails <a name="DevopsagentServiceServiceDetails" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetails;

DevopsagentServiceServiceDetails.builder()
//  .azureIdentity(DevopsagentServiceServiceDetailsAzureIdentity)
//  .dynatrace(DevopsagentServiceServiceDetailsDynatrace)
//  .gitLab(DevopsagentServiceServiceDetailsGitLab)
//  .mcpServer(DevopsagentServiceServiceDetailsMcpServer)
//  .mcpServerGrafana(DevopsagentServiceServiceDetailsMcpServerGrafana)
//  .mcpServerNewRelic(DevopsagentServiceServiceDetailsMcpServerNewRelic)
//  .mcpServerSigV4(DevopsagentServiceServiceDetailsMcpServerSigV4)
//  .mcpServerSplunk(DevopsagentServiceServiceDetailsMcpServerSplunk)
//  .pagerDuty(DevopsagentServiceServiceDetailsPagerDuty)
//  .serviceNow(DevopsagentServiceServiceDetailsServiceNow)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.azureIdentity">azureIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a></code> | Azure Identity service configuration for federated identity. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.dynatrace">dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a></code> | Dynatrace service configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.gitLab">gitLab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a></code> | GitLab service configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServer">mcpServer</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a></code> | MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerGrafana">mcpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a></code> | Grafana MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerNewRelic">mcpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a></code> | New Relic service configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerSigV4">mcpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a></code> | SigV4-authenticated MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerSplunk">mcpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a></code> | Splunk MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.pagerDuty">pagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a></code> | PagerDuty service configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a></code> | ServiceNow service configuration. |

---

##### `azureIdentity`<sup>Optional</sup> <a name="azureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.azureIdentity"></a>

```java
public DevopsagentServiceServiceDetailsAzureIdentity getAzureIdentity();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a>

Azure Identity service configuration for federated identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#azure_identity DevopsagentService#azure_identity}

---

##### `dynatrace`<sup>Optional</sup> <a name="dynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.dynatrace"></a>

```java
public DevopsagentServiceServiceDetailsDynatrace getDynatrace();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a>

Dynatrace service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#dynatrace DevopsagentService#dynatrace}

---

##### `gitLab`<sup>Optional</sup> <a name="gitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.gitLab"></a>

```java
public DevopsagentServiceServiceDetailsGitLab getGitLab();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a>

GitLab service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#git_lab DevopsagentService#git_lab}

---

##### `mcpServer`<sup>Optional</sup> <a name="mcpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServer"></a>

```java
public DevopsagentServiceServiceDetailsMcpServer getMcpServer();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a>

MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#mcp_server DevopsagentService#mcp_server}

---

##### `mcpServerGrafana`<sup>Optional</sup> <a name="mcpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerGrafana"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerGrafana getMcpServerGrafana();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a>

Grafana MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#mcp_server_grafana DevopsagentService#mcp_server_grafana}

---

##### `mcpServerNewRelic`<sup>Optional</sup> <a name="mcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerNewRelic"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerNewRelic getMcpServerNewRelic();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a>

New Relic service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#mcp_server_new_relic DevopsagentService#mcp_server_new_relic}

---

##### `mcpServerSigV4`<sup>Optional</sup> <a name="mcpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerSigV4"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerSigV4 getMcpServerSigV4();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a>

SigV4-authenticated MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#mcp_server_sig_v4 DevopsagentService#mcp_server_sig_v4}

---

##### `mcpServerSplunk`<sup>Optional</sup> <a name="mcpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.mcpServerSplunk"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerSplunk getMcpServerSplunk();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a>

Splunk MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#mcp_server_splunk DevopsagentService#mcp_server_splunk}

---

##### `pagerDuty`<sup>Optional</sup> <a name="pagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.pagerDuty"></a>

```java
public DevopsagentServiceServiceDetailsPagerDuty getPagerDuty();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a>

PagerDuty service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#pager_duty DevopsagentService#pager_duty}

---

##### `serviceNow`<sup>Optional</sup> <a name="serviceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails.property.serviceNow"></a>

```java
public DevopsagentServiceServiceDetailsServiceNow getServiceNow();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a>

ServiceNow service configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#service_now DevopsagentService#service_now}

---

### DevopsagentServiceServiceDetailsAzureIdentity <a name="DevopsagentServiceServiceDetailsAzureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsAzureIdentity;

DevopsagentServiceServiceDetailsAzureIdentity.builder()
//  .clientId(java.lang.String)
//  .tenantId(java.lang.String)
//  .webIdentityRoleArn(java.lang.String)
//  .webIdentityTokenAudiences(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Azure AD application client ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Azure AD tenant ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.webIdentityRoleArn">webIdentityRoleArn</a></code> | <code>java.lang.String</code> | ARN of the IAM role for web identity token exchange. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.webIdentityTokenAudiences">webIdentityTokenAudiences</a></code> | <code>java.util.List<java.lang.String></code> | List of audiences for the web identity token. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Azure AD application client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Azure AD tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#tenant_id DevopsagentService#tenant_id}

---

##### `webIdentityRoleArn`<sup>Optional</sup> <a name="webIdentityRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.webIdentityRoleArn"></a>

```java
public java.lang.String getWebIdentityRoleArn();
```

- *Type:* java.lang.String

ARN of the IAM role for web identity token exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#web_identity_role_arn DevopsagentService#web_identity_role_arn}

---

##### `webIdentityTokenAudiences`<sup>Optional</sup> <a name="webIdentityTokenAudiences" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity.property.webIdentityTokenAudiences"></a>

```java
public java.util.List<java.lang.String> getWebIdentityTokenAudiences();
```

- *Type:* java.util.List<java.lang.String>

List of audiences for the web identity token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#web_identity_token_audiences DevopsagentService#web_identity_token_audiences}

---

### DevopsagentServiceServiceDetailsDynatrace <a name="DevopsagentServiceServiceDetailsDynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsDynatrace;

DevopsagentServiceServiceDetailsDynatrace.builder()
//  .accountUrn(java.lang.String)
//  .authorizationConfig(DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace.property.accountUrn">accountUrn</a></code> | <code>java.lang.String</code> | Dynatrace resource account URN. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a></code> | Dynatrace OAuth authorization configuration. |

---

##### `accountUrn`<sup>Optional</sup> <a name="accountUrn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace.property.accountUrn"></a>

```java
public java.lang.String getAccountUrn();
```

- *Type:* java.lang.String

Dynatrace resource account URN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#account_urn DevopsagentService#account_urn}

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace.property.authorizationConfig"></a>

```java
public DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig getAuthorizationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a>

Dynatrace OAuth authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

### DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig <a name="DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig;

DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig.builder()
//  .oAuthClientCredentials(DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig.property.oAuthClientCredentials">oAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a></code> | OAuth client credentials. |

---

##### `oAuthClientCredentials`<sup>Optional</sup> <a name="oAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig.property.oAuthClientCredentials"></a>

```java
public DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials getOAuthClientCredentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a>

OAuth client credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}

---

### DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials <a name="DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials;

DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.builder()
//  .clientId(java.lang.String)
//  .clientName(java.lang.String)
//  .clientSecret(java.lang.String)
//  .exchangeParameters(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientId">clientId</a></code> | <code>java.lang.String</code> | OAuth client ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientName">clientName</a></code> | <code>java.lang.String</code> | User friendly OAuth client name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | OAuth client secret. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.exchangeParameters">exchangeParameters</a></code> | <code>java.lang.String</code> | OAuth token exchange parameters. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

##### `clientName`<sup>Optional</sup> <a name="clientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientName"></a>

```java
public java.lang.String getClientName();
```

- *Type:* java.lang.String

User friendly OAuth client name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}

---

##### `exchangeParameters`<sup>Optional</sup> <a name="exchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials.property.exchangeParameters"></a>

```java
public java.lang.String getExchangeParameters();
```

- *Type:* java.lang.String

OAuth token exchange parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}

---

### DevopsagentServiceServiceDetailsGitLab <a name="DevopsagentServiceServiceDetailsGitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsGitLab;

DevopsagentServiceServiceDetailsGitLab.builder()
//  .groupId(java.lang.String)
//  .targetUrl(java.lang.String)
//  .tokenType(java.lang.String)
//  .tokenValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.groupId">groupId</a></code> | <code>java.lang.String</code> | Optional GitLab group ID for group-level access tokens. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.targetUrl">targetUrl</a></code> | <code>java.lang.String</code> | GitLab instance URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | Type of GitLab access token. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.tokenValue">tokenValue</a></code> | <code>java.lang.String</code> | GitLab access token value. |

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

Optional GitLab group ID for group-level access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#group_id DevopsagentService#group_id}

---

##### `targetUrl`<sup>Optional</sup> <a name="targetUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.targetUrl"></a>

```java
public java.lang.String getTargetUrl();
```

- *Type:* java.lang.String

GitLab instance URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#target_url DevopsagentService#target_url}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

Type of GitLab access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#token_type DevopsagentService#token_type}

---

##### `tokenValue`<sup>Optional</sup> <a name="tokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab.property.tokenValue"></a>

```java
public java.lang.String getTokenValue();
```

- *Type:* java.lang.String

GitLab access token value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}

---

### DevopsagentServiceServiceDetailsMcpServer <a name="DevopsagentServiceServiceDetailsMcpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServer;

DevopsagentServiceServiceDetailsMcpServer.builder()
//  .authorizationConfig(DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig)
//  .description(java.lang.String)
//  .endpoint(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a></code> | MCP server authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.description">description</a></code> | <code>java.lang.String</code> | Optional description for the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.name">name</a></code> | <code>java.lang.String</code> | MCP server name. |

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.authorizationConfig"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig getAuthorizationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a>

MCP server authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional description for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#description DevopsagentService#description}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

MCP server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#name DevopsagentService#name}

---

### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig;

DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.builder()
//  .apiKey(DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey)
//  .bearerToken(DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken)
//  .oAuthClientCredentials(DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a></code> | API key authentication details. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.bearerToken">bearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a></code> | Bearer token authentication details. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.oAuthClientCredentials">oAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a></code> | MCP server OAuth client credentials configuration. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.apiKey"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey getApiKey();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a>

API key authentication details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#api_key DevopsagentService#api_key}

---

##### `bearerToken`<sup>Optional</sup> <a name="bearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.bearerToken"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken getBearerToken();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a>

Bearer token authentication details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#bearer_token DevopsagentService#bearer_token}

---

##### `oAuthClientCredentials`<sup>Optional</sup> <a name="oAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig.property.oAuthClientCredentials"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials getOAuthClientCredentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a>

MCP server OAuth client credentials configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}

---

### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey;

DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.builder()
//  .apiKeyHeader(java.lang.String)
//  .apiKeyName(java.lang.String)
//  .apiKeyValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyHeader">apiKeyHeader</a></code> | <code>java.lang.String</code> | HTTP header name to send the API key. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyName">apiKeyName</a></code> | <code>java.lang.String</code> | User friendly API key name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyValue">apiKeyValue</a></code> | <code>java.lang.String</code> | API key value. |

---

##### `apiKeyHeader`<sup>Optional</sup> <a name="apiKeyHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyHeader"></a>

```java
public java.lang.String getApiKeyHeader();
```

- *Type:* java.lang.String

HTTP header name to send the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#api_key_header DevopsagentService#api_key_header}

---

##### `apiKeyName`<sup>Optional</sup> <a name="apiKeyName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyName"></a>

```java
public java.lang.String getApiKeyName();
```

- *Type:* java.lang.String

User friendly API key name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#api_key_name DevopsagentService#api_key_name}

---

##### `apiKeyValue`<sup>Optional</sup> <a name="apiKeyValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey.property.apiKeyValue"></a>

```java
public java.lang.String getApiKeyValue();
```

- *Type:* java.lang.String

API key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#api_key_value DevopsagentService#api_key_value}

---

### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken;

DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.builder()
//  .authorizationHeader(java.lang.String)
//  .tokenName(java.lang.String)
//  .tokenValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.authorizationHeader">authorizationHeader</a></code> | <code>java.lang.String</code> | HTTP header name to send the bearer token. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.tokenName">tokenName</a></code> | <code>java.lang.String</code> | User friendly bearer token name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.tokenValue">tokenValue</a></code> | <code>java.lang.String</code> | Bearer token value. |

---

##### `authorizationHeader`<sup>Optional</sup> <a name="authorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.authorizationHeader"></a>

```java
public java.lang.String getAuthorizationHeader();
```

- *Type:* java.lang.String

HTTP header name to send the bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#authorization_header DevopsagentService#authorization_header}

---

##### `tokenName`<sup>Optional</sup> <a name="tokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.tokenName"></a>

```java
public java.lang.String getTokenName();
```

- *Type:* java.lang.String

User friendly bearer token name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#token_name DevopsagentService#token_name}

---

##### `tokenValue`<sup>Optional</sup> <a name="tokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken.property.tokenValue"></a>

```java
public java.lang.String getTokenValue();
```

- *Type:* java.lang.String

Bearer token value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}

---

### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials;

DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.builder()
//  .clientId(java.lang.String)
//  .clientName(java.lang.String)
//  .clientSecret(java.lang.String)
//  .exchangeParameters(java.lang.String)
//  .exchangeUrl(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientId">clientId</a></code> | <code>java.lang.String</code> | OAuth client ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientName">clientName</a></code> | <code>java.lang.String</code> | User friendly OAuth client name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | OAuth client secret. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.exchangeParameters">exchangeParameters</a></code> | <code>java.lang.String</code> | OAuth token exchange parameters. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.exchangeUrl">exchangeUrl</a></code> | <code>java.lang.String</code> | OAuth token exchange URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | OAuth scopes. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

##### `clientName`<sup>Optional</sup> <a name="clientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientName"></a>

```java
public java.lang.String getClientName();
```

- *Type:* java.lang.String

User friendly OAuth client name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}

---

##### `exchangeParameters`<sup>Optional</sup> <a name="exchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.exchangeParameters"></a>

```java
public java.lang.String getExchangeParameters();
```

- *Type:* java.lang.String

OAuth token exchange parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}

---

##### `exchangeUrl`<sup>Optional</sup> <a name="exchangeUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.exchangeUrl"></a>

```java
public java.lang.String getExchangeUrl();
```

- *Type:* java.lang.String

OAuth token exchange URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#exchange_url DevopsagentService#exchange_url}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

OAuth scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#scopes DevopsagentService#scopes}

---

### DevopsagentServiceServiceDetailsMcpServerGrafana <a name="DevopsagentServiceServiceDetailsMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerGrafana;

DevopsagentServiceServiceDetailsMcpServerGrafana.builder()
//  .authorizationConfig(DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig)
//  .description(java.lang.String)
//  .endpoint(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a></code> | Grafana MCP server authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.description">description</a></code> | <code>java.lang.String</code> | Optional description for the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.name">name</a></code> | <code>java.lang.String</code> | MCP server name. |

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.authorizationConfig"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig getAuthorizationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a>

Grafana MCP server authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional description for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#description DevopsagentService#description}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

MCP server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#name DevopsagentService#name}

---

### DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig <a name="DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig;

DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig.builder()
//  .bearerToken(DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig.property.bearerToken">bearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a></code> | Bearer token authentication details. |

---

##### `bearerToken`<sup>Optional</sup> <a name="bearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig.property.bearerToken"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken getBearerToken();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a>

Bearer token authentication details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#bearer_token DevopsagentService#bearer_token}

---

### DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken <a name="DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken;

DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.builder()
//  .authorizationHeader(java.lang.String)
//  .tokenName(java.lang.String)
//  .tokenValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.authorizationHeader">authorizationHeader</a></code> | <code>java.lang.String</code> | HTTP header name to send the bearer token. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.tokenName">tokenName</a></code> | <code>java.lang.String</code> | User friendly bearer token name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.tokenValue">tokenValue</a></code> | <code>java.lang.String</code> | Bearer token value. |

---

##### `authorizationHeader`<sup>Optional</sup> <a name="authorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.authorizationHeader"></a>

```java
public java.lang.String getAuthorizationHeader();
```

- *Type:* java.lang.String

HTTP header name to send the bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#authorization_header DevopsagentService#authorization_header}

---

##### `tokenName`<sup>Optional</sup> <a name="tokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.tokenName"></a>

```java
public java.lang.String getTokenName();
```

- *Type:* java.lang.String

User friendly bearer token name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#token_name DevopsagentService#token_name}

---

##### `tokenValue`<sup>Optional</sup> <a name="tokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken.property.tokenValue"></a>

```java
public java.lang.String getTokenValue();
```

- *Type:* java.lang.String

Bearer token value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}

---

### DevopsagentServiceServiceDetailsMcpServerNewRelic <a name="DevopsagentServiceServiceDetailsMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerNewRelic;

DevopsagentServiceServiceDetailsMcpServerNewRelic.builder()
//  .authorizationConfig(DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a></code> | New Relic authorization configuration. |

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic.property.authorizationConfig"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig getAuthorizationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a>

New Relic authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

### DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig <a name="DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig;

DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig.builder()
//  .apiKey(DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a></code> | New Relic API key configuration. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig.property.apiKey"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey getApiKey();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a>

New Relic API key configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#api_key DevopsagentService#api_key}

---

### DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey <a name="DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey;

DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.builder()
//  .accountId(java.lang.String)
//  .alertPolicyIds(java.util.List<java.lang.String>)
//  .apiKey(java.lang.String)
//  .applicationIds(java.util.List<java.lang.String>)
//  .entityGuids(java.util.List<java.lang.String>)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.accountId">accountId</a></code> | <code>java.lang.String</code> | New Relic Account ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.alertPolicyIds">alertPolicyIds</a></code> | <code>java.util.List<java.lang.String></code> | List of alert policy IDs. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | New Relic User API Key. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.applicationIds">applicationIds</a></code> | <code>java.util.List<java.lang.String></code> | List of monitored APM application IDs. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.entityGuids">entityGuids</a></code> | <code>java.util.List<java.lang.String></code> | List of globally unique IDs for New Relic resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.region">region</a></code> | <code>java.lang.String</code> | New Relic region. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

New Relic Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#account_id DevopsagentService#account_id}

---

##### `alertPolicyIds`<sup>Optional</sup> <a name="alertPolicyIds" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.alertPolicyIds"></a>

```java
public java.util.List<java.lang.String> getAlertPolicyIds();
```

- *Type:* java.util.List<java.lang.String>

List of alert policy IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#alert_policy_ids DevopsagentService#alert_policy_ids}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

New Relic User API Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#api_key DevopsagentService#api_key}

---

##### `applicationIds`<sup>Optional</sup> <a name="applicationIds" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.applicationIds"></a>

```java
public java.util.List<java.lang.String> getApplicationIds();
```

- *Type:* java.util.List<java.lang.String>

List of monitored APM application IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#application_ids DevopsagentService#application_ids}

---

##### `entityGuids`<sup>Optional</sup> <a name="entityGuids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.entityGuids"></a>

```java
public java.util.List<java.lang.String> getEntityGuids();
```

- *Type:* java.util.List<java.lang.String>

List of globally unique IDs for New Relic resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#entity_guids DevopsagentService#entity_guids}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

New Relic region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#region DevopsagentService#region}

---

### DevopsagentServiceServiceDetailsMcpServerSigV4 <a name="DevopsagentServiceServiceDetailsMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerSigV4;

DevopsagentServiceServiceDetailsMcpServerSigV4.builder()
//  .authorizationConfig(DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig)
//  .description(java.lang.String)
//  .endpoint(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a></code> | SigV4 authorization configuration for MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.description">description</a></code> | <code>java.lang.String</code> | Optional description for the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.name">name</a></code> | <code>java.lang.String</code> | MCP server name. |

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.authorizationConfig"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig getAuthorizationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a>

SigV4 authorization configuration for MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional description for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#description DevopsagentService#description}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

MCP server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#name DevopsagentService#name}

---

### DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig <a name="DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig;

DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.builder()
//  .customHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .mcpRoleArn(java.lang.String)
//  .region(java.lang.String)
//  .roleArn(java.lang.String)
//  .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.customHeaders">customHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Custom headers for the SigV4 MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.mcpRoleArn">mcpRoleArn</a></code> | <code>java.lang.String</code> | IAM role ARN to assume for SigV4 signing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.region">region</a></code> | <code>java.lang.String</code> | AWS region for SigV4 signing. Use '*' for SigV4a multi-region signing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Deprecated - use McpRoleArn instead. IAM role ARN to assume for SigV4 signing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.service">service</a></code> | <code>java.lang.String</code> | AWS service name for SigV4 signing. |

---

##### `customHeaders`<sup>Optional</sup> <a name="customHeaders" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.customHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Custom headers for the SigV4 MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#custom_headers DevopsagentService#custom_headers}

---

##### `mcpRoleArn`<sup>Optional</sup> <a name="mcpRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.mcpRoleArn"></a>

```java
public java.lang.String getMcpRoleArn();
```

- *Type:* java.lang.String

IAM role ARN to assume for SigV4 signing.

Optional - when omitted, credentials are resolved at runtime via a monitor account association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#mcp_role_arn DevopsagentService#mcp_role_arn}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

AWS region for SigV4 signing. Use '*' for SigV4a multi-region signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#region DevopsagentService#region}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Deprecated - use McpRoleArn instead. IAM role ARN to assume for SigV4 signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#role_arn DevopsagentService#role_arn}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

AWS service name for SigV4 signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#service DevopsagentService#service}

---

### DevopsagentServiceServiceDetailsMcpServerSplunk <a name="DevopsagentServiceServiceDetailsMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerSplunk;

DevopsagentServiceServiceDetailsMcpServerSplunk.builder()
//  .authorizationConfig(DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig)
//  .description(java.lang.String)
//  .endpoint(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a></code> | MCP server splunk authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.description">description</a></code> | <code>java.lang.String</code> | Optional description for the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.name">name</a></code> | <code>java.lang.String</code> | MCP server name. |

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.authorizationConfig"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig getAuthorizationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a>

MCP server splunk authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional description for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#description DevopsagentService#description}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

MCP server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#name DevopsagentService#name}

---

### DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig <a name="DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig;

DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig.builder()
//  .bearerToken(DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig.property.bearerToken">bearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a></code> | Bearer token authentication details. |

---

##### `bearerToken`<sup>Optional</sup> <a name="bearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig.property.bearerToken"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken getBearerToken();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a>

Bearer token authentication details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#bearer_token DevopsagentService#bearer_token}

---

### DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken <a name="DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken;

DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.builder()
//  .authorizationHeader(java.lang.String)
//  .tokenName(java.lang.String)
//  .tokenValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.authorizationHeader">authorizationHeader</a></code> | <code>java.lang.String</code> | HTTP header name to send the bearer token. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.tokenName">tokenName</a></code> | <code>java.lang.String</code> | User friendly bearer token name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.tokenValue">tokenValue</a></code> | <code>java.lang.String</code> | Bearer token value. |

---

##### `authorizationHeader`<sup>Optional</sup> <a name="authorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.authorizationHeader"></a>

```java
public java.lang.String getAuthorizationHeader();
```

- *Type:* java.lang.String

HTTP header name to send the bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#authorization_header DevopsagentService#authorization_header}

---

##### `tokenName`<sup>Optional</sup> <a name="tokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.tokenName"></a>

```java
public java.lang.String getTokenName();
```

- *Type:* java.lang.String

User friendly bearer token name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#token_name DevopsagentService#token_name}

---

##### `tokenValue`<sup>Optional</sup> <a name="tokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken.property.tokenValue"></a>

```java
public java.lang.String getTokenValue();
```

- *Type:* java.lang.String

Bearer token value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}

---

### DevopsagentServiceServiceDetailsPagerDuty <a name="DevopsagentServiceServiceDetailsPagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsPagerDuty;

DevopsagentServiceServiceDetailsPagerDuty.builder()
//  .authorizationConfig(DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig)
//  .scopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a></code> | PagerDuty OAuth authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | PagerDuty scopes. |

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty.property.authorizationConfig"></a>

```java
public DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig getAuthorizationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a>

PagerDuty OAuth authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

PagerDuty scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#scopes DevopsagentService#scopes}

---

### DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig <a name="DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig;

DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig.builder()
//  .oAuthClientCredentials(DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig.property.oAuthClientCredentials">oAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a></code> | OAuth client credentials. |

---

##### `oAuthClientCredentials`<sup>Optional</sup> <a name="oAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig.property.oAuthClientCredentials"></a>

```java
public DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials getOAuthClientCredentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a>

OAuth client credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}

---

### DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials <a name="DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials;

DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.builder()
//  .clientId(java.lang.String)
//  .clientName(java.lang.String)
//  .clientSecret(java.lang.String)
//  .exchangeParameters(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientId">clientId</a></code> | <code>java.lang.String</code> | OAuth client ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientName">clientName</a></code> | <code>java.lang.String</code> | User friendly OAuth client name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | OAuth client secret. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.exchangeParameters">exchangeParameters</a></code> | <code>java.lang.String</code> | OAuth token exchange parameters. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

##### `clientName`<sup>Optional</sup> <a name="clientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientName"></a>

```java
public java.lang.String getClientName();
```

- *Type:* java.lang.String

User friendly OAuth client name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}

---

##### `exchangeParameters`<sup>Optional</sup> <a name="exchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials.property.exchangeParameters"></a>

```java
public java.lang.String getExchangeParameters();
```

- *Type:* java.lang.String

OAuth token exchange parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}

---

### DevopsagentServiceServiceDetailsServiceNow <a name="DevopsagentServiceServiceDetailsServiceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsServiceNow;

DevopsagentServiceServiceDetailsServiceNow.builder()
//  .authorizationConfig(DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig)
//  .instanceUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a></code> | ServiceNow OAuth authorization configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow.property.instanceUrl">instanceUrl</a></code> | <code>java.lang.String</code> | ServiceNow instance URL. |

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow.property.authorizationConfig"></a>

```java
public DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig getAuthorizationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a>

ServiceNow OAuth authorization configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}

---

##### `instanceUrl`<sup>Optional</sup> <a name="instanceUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow.property.instanceUrl"></a>

```java
public java.lang.String getInstanceUrl();
```

- *Type:* java.lang.String

ServiceNow instance URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#instance_url DevopsagentService#instance_url}

---

### DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig <a name="DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig;

DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig.builder()
//  .oAuthClientCredentials(DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig.property.oAuthClientCredentials">oAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a></code> | OAuth client credentials. |

---

##### `oAuthClientCredentials`<sup>Optional</sup> <a name="oAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig.property.oAuthClientCredentials"></a>

```java
public DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials getOAuthClientCredentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a>

OAuth client credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}

---

### DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials <a name="DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials;

DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.builder()
//  .clientId(java.lang.String)
//  .clientName(java.lang.String)
//  .clientSecret(java.lang.String)
//  .exchangeParameters(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientId">clientId</a></code> | <code>java.lang.String</code> | OAuth client ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientName">clientName</a></code> | <code>java.lang.String</code> | User friendly OAuth client name. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | OAuth client secret. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.exchangeParameters">exchangeParameters</a></code> | <code>java.lang.String</code> | OAuth token exchange parameters. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}

---

##### `clientName`<sup>Optional</sup> <a name="clientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientName"></a>

```java
public java.lang.String getClientName();
```

- *Type:* java.lang.String

User friendly OAuth client name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}

---

##### `exchangeParameters`<sup>Optional</sup> <a name="exchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials.property.exchangeParameters"></a>

```java
public java.lang.String getExchangeParameters();
```

- *Type:* java.lang.String

OAuth token exchange parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}

---

### DevopsagentServiceTags <a name="DevopsagentServiceTags" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceTags;

DevopsagentServiceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#key DevopsagentService#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/devopsagent_service#value DevopsagentService#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference;

new DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn">webIdentityRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences">webIdentityTokenAudiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentity">DevopsagentServiceAdditionalServiceDetailsAzureIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `webIdentityRoleArn`<sup>Required</sup> <a name="webIdentityRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn"></a>

```java
public java.lang.String getWebIdentityRoleArn();
```

- *Type:* java.lang.String

---

##### `webIdentityTokenAudiences`<sup>Required</sup> <a name="webIdentityTokenAudiences" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences"></a>

```java
public java.util.List<java.lang.String> getWebIdentityTokenAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference.property.internalValue"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsAzureIdentity getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentity">DevopsagentServiceAdditionalServiceDetailsAzureIdentity</a>

---


### DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference;

new DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.accountUrn">accountUrn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatrace">DevopsagentServiceAdditionalServiceDetailsDynatrace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountUrn`<sup>Required</sup> <a name="accountUrn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.accountUrn"></a>

```java
public java.lang.String getAccountUrn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference.property.internalValue"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsDynatrace getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatrace">DevopsagentServiceAdditionalServiceDetailsDynatrace</a>

---


### DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference;

new DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.targetUrl">targetUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLab">DevopsagentServiceAdditionalServiceDetailsGitLab</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `targetUrl`<sup>Required</sup> <a name="targetUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.targetUrl"></a>

```java
public java.lang.String getTargetUrl();
```

- *Type:* java.lang.String

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference.property.internalValue"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsGitLab getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLab">DevopsagentServiceAdditionalServiceDetailsGitLab</a>

---


### DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference;

new DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.authorizationMethod">authorizationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana">DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationMethod`<sup>Required</sup> <a name="authorizationMethod" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.authorizationMethod"></a>

```java
public java.lang.String getAuthorizationMethod();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference.property.internalValue"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana">DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana</a>

---


### DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference;

new DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic">DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference.property.internalValue"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic">DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic</a>

---


### DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference;

new DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.apiKeyHeader">apiKeyHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.authorizationMethod">authorizationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServer">DevopsagentServiceAdditionalServiceDetailsMcpServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyHeader`<sup>Required</sup> <a name="apiKeyHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.apiKeyHeader"></a>

```java
public java.lang.String getApiKeyHeader();
```

- *Type:* java.lang.String

---

##### `authorizationMethod`<sup>Required</sup> <a name="authorizationMethod" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.authorizationMethod"></a>

```java
public java.lang.String getAuthorizationMethod();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference.property.internalValue"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsMcpServer getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServer">DevopsagentServiceAdditionalServiceDetailsMcpServer</a>

---


### DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference;

new DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.customHeaders">customHeaders</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.mcpRoleArn">mcpRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4">DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customHeaders`<sup>Required</sup> <a name="customHeaders" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.customHeaders"></a>

```java
public StringMap getCustomHeaders();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `mcpRoleArn`<sup>Required</sup> <a name="mcpRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.mcpRoleArn"></a>

```java
public java.lang.String getMcpRoleArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference.property.internalValue"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4 getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4">DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4</a>

---


### DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference;

new DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.apiKeyHeader">apiKeyHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.authorizationMethod">authorizationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk">DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyHeader`<sup>Required</sup> <a name="apiKeyHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.apiKeyHeader"></a>

```java
public java.lang.String getApiKeyHeader();
```

- *Type:* java.lang.String

---

##### `authorizationMethod`<sup>Required</sup> <a name="authorizationMethod" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.authorizationMethod"></a>

```java
public java.lang.String getAuthorizationMethod();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference.property.internalValue"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk">DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk</a>

---


### DevopsagentServiceAdditionalServiceDetailsOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsOutputReference;

new DevopsagentServiceAdditionalServiceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.azureIdentity">azureIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference">DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.dynatrace">dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference">DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.gitLab">gitLab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference">DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServer">mcpServer</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerGrafana">mcpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerNewRelic">mcpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSigV4">mcpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSplunk">mcpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.pagerDuty">pagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference">DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference">DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetails">DevopsagentServiceAdditionalServiceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureIdentity`<sup>Required</sup> <a name="azureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.azureIdentity"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference getAzureIdentity();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference">DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference</a>

---

##### `dynatrace`<sup>Required</sup> <a name="dynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.dynatrace"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference getDynatrace();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference">DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference</a>

---

##### `gitLab`<sup>Required</sup> <a name="gitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.gitLab"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference getGitLab();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference">DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference</a>

---

##### `mcpServer`<sup>Required</sup> <a name="mcpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServer"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference getMcpServer();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference</a>

---

##### `mcpServerGrafana`<sup>Required</sup> <a name="mcpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerGrafana"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference getMcpServerGrafana();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference</a>

---

##### `mcpServerNewRelic`<sup>Required</sup> <a name="mcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerNewRelic"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference getMcpServerNewRelic();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference</a>

---

##### `mcpServerSigV4`<sup>Required</sup> <a name="mcpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSigV4"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference getMcpServerSigV4();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference</a>

---

##### `mcpServerSplunk`<sup>Required</sup> <a name="mcpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.mcpServerSplunk"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference getMcpServerSplunk();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference">DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference</a>

---

##### `pagerDuty`<sup>Required</sup> <a name="pagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.pagerDuty"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference getPagerDuty();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference">DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference</a>

---

##### `serviceNow`<sup>Required</sup> <a name="serviceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.serviceNow"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference getServiceNow();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference">DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsOutputReference.property.internalValue"></a>

```java
public DevopsagentServiceAdditionalServiceDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetails">DevopsagentServiceAdditionalServiceDetails</a>

---


### DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference;

new DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDuty">DevopsagentServiceAdditionalServiceDetailsPagerDuty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference.property.internalValue"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsPagerDuty getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsPagerDuty">DevopsagentServiceAdditionalServiceDetailsPagerDuty</a>

---


### DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference <a name="DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference;

new DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.instanceUrl">instanceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNow">DevopsagentServiceAdditionalServiceDetailsServiceNow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.instanceUrl"></a>

```java
public java.lang.String getInstanceUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference.property.internalValue"></a>

```java
public DevopsagentServiceAdditionalServiceDetailsServiceNow getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceAdditionalServiceDetailsServiceNow">DevopsagentServiceAdditionalServiceDetailsServiceNow</a>

---


### DevopsagentServiceServiceDetailsAzureIdentityOutputReference <a name="DevopsagentServiceServiceDetailsAzureIdentityOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsAzureIdentityOutputReference;

new DevopsagentServiceServiceDetailsAzureIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetWebIdentityRoleArn">resetWebIdentityRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetWebIdentityTokenAudiences">resetWebIdentityTokenAudiences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetTenantId"></a>

```java
public void resetTenantId()
```

##### `resetWebIdentityRoleArn` <a name="resetWebIdentityRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetWebIdentityRoleArn"></a>

```java
public void resetWebIdentityRoleArn()
```

##### `resetWebIdentityTokenAudiences` <a name="resetWebIdentityTokenAudiences" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.resetWebIdentityTokenAudiences"></a>

```java
public void resetWebIdentityTokenAudiences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArnInput">webIdentityRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiencesInput">webIdentityTokenAudiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn">webIdentityRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences">webIdentityTokenAudiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `webIdentityRoleArnInput`<sup>Optional</sup> <a name="webIdentityRoleArnInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArnInput"></a>

```java
public java.lang.String getWebIdentityRoleArnInput();
```

- *Type:* java.lang.String

---

##### `webIdentityTokenAudiencesInput`<sup>Optional</sup> <a name="webIdentityTokenAudiencesInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiencesInput"></a>

```java
public java.util.List<java.lang.String> getWebIdentityTokenAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `webIdentityRoleArn`<sup>Required</sup> <a name="webIdentityRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityRoleArn"></a>

```java
public java.lang.String getWebIdentityRoleArn();
```

- *Type:* java.lang.String

---

##### `webIdentityTokenAudiences`<sup>Required</sup> <a name="webIdentityTokenAudiences" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.webIdentityTokenAudiences"></a>

```java
public java.util.List<java.lang.String> getWebIdentityTokenAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsAzureIdentity getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a>

---


### DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference;

new DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName">resetClientName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters">resetExchangeParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientName` <a name="resetClientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName"></a>

```java
public void resetClientName()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetExchangeParameters` <a name="resetExchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters"></a>

```java
public void resetExchangeParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput">clientNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput">exchangeParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">clientName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">exchangeParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientNameInput`<sup>Optional</sup> <a name="clientNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput"></a>

```java
public java.lang.String getClientNameInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `exchangeParametersInput`<sup>Optional</sup> <a name="exchangeParametersInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput"></a>

```java
public java.lang.String getExchangeParametersInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientName`<sup>Required</sup> <a name="clientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```java
public java.lang.String getClientName();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `exchangeParameters`<sup>Required</sup> <a name="exchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```java
public java.lang.String getExchangeParameters();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a>

---


### DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference;

new DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.putOAuthClientCredentials">putOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resetOAuthClientCredentials">resetOAuthClientCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOAuthClientCredentials` <a name="putOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.putOAuthClientCredentials"></a>

```java
public void putOAuthClientCredentials(DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a>

---

##### `resetOAuthClientCredentials` <a name="resetOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.resetOAuthClientCredentials"></a>

```java
public void resetOAuthClientCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.oAuthClientCredentials">oAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput">oAuthClientCredentialsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `oAuthClientCredentials`<sup>Required</sup> <a name="oAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```java
public DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference getOAuthClientCredentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `oAuthClientCredentialsInput`<sup>Optional</sup> <a name="oAuthClientCredentialsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials getOAuthClientCredentialsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsDynatraceOutputReference <a name="DevopsagentServiceServiceDetailsDynatraceOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsDynatraceOutputReference;

new DevopsagentServiceServiceDetailsDynatraceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resetAccountUrn">resetAccountUrn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resetAuthorizationConfig">resetAuthorizationConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.putAuthorizationConfig"></a>

```java
public void putAuthorizationConfig(DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a>

---

##### `resetAccountUrn` <a name="resetAccountUrn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resetAccountUrn"></a>

```java
public void resetAccountUrn()
```

##### `resetAuthorizationConfig` <a name="resetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.resetAuthorizationConfig"></a>

```java
public void resetAuthorizationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.accountUrnInput">accountUrnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.accountUrn">accountUrn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.authorizationConfig"></a>

```java
public DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference getAuthorizationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference</a>

---

##### `accountUrnInput`<sup>Optional</sup> <a name="accountUrnInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.accountUrnInput"></a>

```java
public java.lang.String getAccountUrnInput();
```

- *Type:* java.lang.String

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.authorizationConfigInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig getAuthorizationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig">DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig</a>

---

##### `accountUrn`<sup>Required</sup> <a name="accountUrn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.accountUrn"></a>

```java
public java.lang.String getAccountUrn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsDynatrace getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a>

---


### DevopsagentServiceServiceDetailsGitLabOutputReference <a name="DevopsagentServiceServiceDetailsGitLabOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsGitLabOutputReference;

new DevopsagentServiceServiceDetailsGitLabOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTargetUrl">resetTargetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTokenType">resetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTokenValue">resetTokenValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupId` <a name="resetGroupId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetTargetUrl` <a name="resetTargetUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTargetUrl"></a>

```java
public void resetTargetUrl()
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTokenType"></a>

```java
public void resetTokenType()
```

##### `resetTokenValue` <a name="resetTokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.resetTokenValue"></a>

```java
public void resetTokenValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.targetUrlInput">targetUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenTypeInput">tokenTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenValueInput">tokenValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.targetUrl">targetUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenValue">tokenValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `targetUrlInput`<sup>Optional</sup> <a name="targetUrlInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.targetUrlInput"></a>

```java
public java.lang.String getTargetUrlInput();
```

- *Type:* java.lang.String

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenTypeInput"></a>

```java
public java.lang.String getTokenTypeInput();
```

- *Type:* java.lang.String

---

##### `tokenValueInput`<sup>Optional</sup> <a name="tokenValueInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenValueInput"></a>

```java
public java.lang.String getTokenValueInput();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `targetUrl`<sup>Required</sup> <a name="targetUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.targetUrl"></a>

```java
public java.lang.String getTargetUrl();
```

- *Type:* java.lang.String

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

##### `tokenValue`<sup>Required</sup> <a name="tokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.tokenValue"></a>

```java
public java.lang.String getTokenValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsGitLab getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a>

---


### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference;

new DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyHeader">resetApiKeyHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyName">resetApiKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyValue">resetApiKeyValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKeyHeader` <a name="resetApiKeyHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyHeader"></a>

```java
public void resetApiKeyHeader()
```

##### `resetApiKeyName` <a name="resetApiKeyName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyName"></a>

```java
public void resetApiKeyName()
```

##### `resetApiKeyValue` <a name="resetApiKeyValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.resetApiKeyValue"></a>

```java
public void resetApiKeyValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyHeaderInput">apiKeyHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyNameInput">apiKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyValueInput">apiKeyValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyHeader">apiKeyHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyName">apiKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyValue">apiKeyValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyHeaderInput`<sup>Optional</sup> <a name="apiKeyHeaderInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyHeaderInput"></a>

```java
public java.lang.String getApiKeyHeaderInput();
```

- *Type:* java.lang.String

---

##### `apiKeyNameInput`<sup>Optional</sup> <a name="apiKeyNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyNameInput"></a>

```java
public java.lang.String getApiKeyNameInput();
```

- *Type:* java.lang.String

---

##### `apiKeyValueInput`<sup>Optional</sup> <a name="apiKeyValueInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyValueInput"></a>

```java
public java.lang.String getApiKeyValueInput();
```

- *Type:* java.lang.String

---

##### `apiKeyHeader`<sup>Required</sup> <a name="apiKeyHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyHeader"></a>

```java
public java.lang.String getApiKeyHeader();
```

- *Type:* java.lang.String

---

##### `apiKeyName`<sup>Required</sup> <a name="apiKeyName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyName"></a>

```java
public java.lang.String getApiKeyName();
```

- *Type:* java.lang.String

---

##### `apiKeyValue`<sup>Required</sup> <a name="apiKeyValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.apiKeyValue"></a>

```java
public java.lang.String getApiKeyValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a>

---


### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference;

new DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader">resetAuthorizationHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetTokenName">resetTokenName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetTokenValue">resetTokenValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationHeader` <a name="resetAuthorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader"></a>

```java
public void resetAuthorizationHeader()
```

##### `resetTokenName` <a name="resetTokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetTokenName"></a>

```java
public void resetTokenName()
```

##### `resetTokenValue` <a name="resetTokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.resetTokenValue"></a>

```java
public void resetTokenValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput">authorizationHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput">tokenNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput">tokenValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader">authorizationHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenName">tokenName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenValue">tokenValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationHeaderInput`<sup>Optional</sup> <a name="authorizationHeaderInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput"></a>

```java
public java.lang.String getAuthorizationHeaderInput();
```

- *Type:* java.lang.String

---

##### `tokenNameInput`<sup>Optional</sup> <a name="tokenNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput"></a>

```java
public java.lang.String getTokenNameInput();
```

- *Type:* java.lang.String

---

##### `tokenValueInput`<sup>Optional</sup> <a name="tokenValueInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput"></a>

```java
public java.lang.String getTokenValueInput();
```

- *Type:* java.lang.String

---

##### `authorizationHeader`<sup>Required</sup> <a name="authorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader"></a>

```java
public java.lang.String getAuthorizationHeader();
```

- *Type:* java.lang.String

---

##### `tokenName`<sup>Required</sup> <a name="tokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenName"></a>

```java
public java.lang.String getTokenName();
```

- *Type:* java.lang.String

---

##### `tokenValue`<sup>Required</sup> <a name="tokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.tokenValue"></a>

```java
public java.lang.String getTokenValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a>

---


### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference;

new DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName">resetClientName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters">resetExchangeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeUrl">resetExchangeUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientName` <a name="resetClientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName"></a>

```java
public void resetClientName()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetExchangeParameters` <a name="resetExchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters"></a>

```java
public void resetExchangeParameters()
```

##### `resetExchangeUrl` <a name="resetExchangeUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeUrl"></a>

```java
public void resetExchangeUrl()
```

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.resetScopes"></a>

```java
public void resetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput">clientNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput">exchangeParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeUrlInput">exchangeUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">clientName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">exchangeParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeUrl">exchangeUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientNameInput`<sup>Optional</sup> <a name="clientNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput"></a>

```java
public java.lang.String getClientNameInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `exchangeParametersInput`<sup>Optional</sup> <a name="exchangeParametersInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput"></a>

```java
public java.lang.String getExchangeParametersInput();
```

- *Type:* java.lang.String

---

##### `exchangeUrlInput`<sup>Optional</sup> <a name="exchangeUrlInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeUrlInput"></a>

```java
public java.lang.String getExchangeUrlInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientName`<sup>Required</sup> <a name="clientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```java
public java.lang.String getClientName();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `exchangeParameters`<sup>Required</sup> <a name="exchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```java
public java.lang.String getExchangeParameters();
```

- *Type:* java.lang.String

---

##### `exchangeUrl`<sup>Required</sup> <a name="exchangeUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeUrl"></a>

```java
public java.lang.String getExchangeUrl();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a>

---


### DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference;

new DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putApiKey">putApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putBearerToken">putBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putOAuthClientCredentials">putOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetBearerToken">resetBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetOAuthClientCredentials">resetOAuthClientCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKey` <a name="putApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putApiKey"></a>

```java
public void putApiKey(DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a>

---

##### `putBearerToken` <a name="putBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putBearerToken"></a>

```java
public void putBearerToken(DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putBearerToken.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a>

---

##### `putOAuthClientCredentials` <a name="putOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putOAuthClientCredentials"></a>

```java
public void putOAuthClientCredentials(DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a>

---

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetApiKey"></a>

```java
public void resetApiKey()
```

##### `resetBearerToken` <a name="resetBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetBearerToken"></a>

```java
public void resetBearerToken()
```

##### `resetOAuthClientCredentials` <a name="resetOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.resetOAuthClientCredentials"></a>

```java
public void resetOAuthClientCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.bearerToken">bearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.oAuthClientCredentials">oAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.bearerTokenInput">bearerTokenInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput">oAuthClientCredentialsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.apiKey"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference getApiKey();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference</a>

---

##### `bearerToken`<sup>Required</sup> <a name="bearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.bearerToken"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference getBearerToken();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerTokenOutputReference</a>

---

##### `oAuthClientCredentials`<sup>Required</sup> <a name="oAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference getOAuthClientCredentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.apiKeyInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey getApiKeyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey</a>

---

##### `bearerTokenInput`<sup>Optional</sup> <a name="bearerTokenInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.bearerTokenInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken getBearerTokenInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigBearerToken</a>

---

##### `oAuthClientCredentialsInput`<sup>Optional</sup> <a name="oAuthClientCredentialsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials getOAuthClientCredentialsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference;

new DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader">resetAuthorizationHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetTokenName">resetTokenName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetTokenValue">resetTokenValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationHeader` <a name="resetAuthorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader"></a>

```java
public void resetAuthorizationHeader()
```

##### `resetTokenName` <a name="resetTokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetTokenName"></a>

```java
public void resetTokenName()
```

##### `resetTokenValue` <a name="resetTokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.resetTokenValue"></a>

```java
public void resetTokenValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput">authorizationHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput">tokenNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput">tokenValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader">authorizationHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenName">tokenName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenValue">tokenValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationHeaderInput`<sup>Optional</sup> <a name="authorizationHeaderInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput"></a>

```java
public java.lang.String getAuthorizationHeaderInput();
```

- *Type:* java.lang.String

---

##### `tokenNameInput`<sup>Optional</sup> <a name="tokenNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput"></a>

```java
public java.lang.String getTokenNameInput();
```

- *Type:* java.lang.String

---

##### `tokenValueInput`<sup>Optional</sup> <a name="tokenValueInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput"></a>

```java
public java.lang.String getTokenValueInput();
```

- *Type:* java.lang.String

---

##### `authorizationHeader`<sup>Required</sup> <a name="authorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader"></a>

```java
public java.lang.String getAuthorizationHeader();
```

- *Type:* java.lang.String

---

##### `tokenName`<sup>Required</sup> <a name="tokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenName"></a>

```java
public java.lang.String getTokenName();
```

- *Type:* java.lang.String

---

##### `tokenValue`<sup>Required</sup> <a name="tokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.tokenValue"></a>

```java
public java.lang.String getTokenValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a>

---


### DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference;

new DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.putBearerToken">putBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resetBearerToken">resetBearerToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBearerToken` <a name="putBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.putBearerToken"></a>

```java
public void putBearerToken(DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.putBearerToken.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a>

---

##### `resetBearerToken` <a name="resetBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.resetBearerToken"></a>

```java
public void resetBearerToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.bearerToken">bearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.bearerTokenInput">bearerTokenInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bearerToken`<sup>Required</sup> <a name="bearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.bearerToken"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference getBearerToken();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference</a>

---

##### `bearerTokenInput`<sup>Optional</sup> <a name="bearerTokenInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.bearerTokenInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken getBearerTokenInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference;

new DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetAuthorizationConfig">resetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.putAuthorizationConfig"></a>

```java
public void putAuthorizationConfig(DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a>

---

##### `resetAuthorizationConfig` <a name="resetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetAuthorizationConfig"></a>

```java
public void resetAuthorizationConfig()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.authorizationConfig"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference getAuthorizationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.authorizationConfigInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig getAuthorizationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerGrafana getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a>

---


### DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference;

new DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetAlertPolicyIds">resetAlertPolicyIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetApplicationIds">resetApplicationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetEntityGuids">resetEntityGuids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAlertPolicyIds` <a name="resetAlertPolicyIds" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetAlertPolicyIds"></a>

```java
public void resetAlertPolicyIds()
```

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetApiKey"></a>

```java
public void resetApiKey()
```

##### `resetApplicationIds` <a name="resetApplicationIds" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetApplicationIds"></a>

```java
public void resetApplicationIds()
```

##### `resetEntityGuids` <a name="resetEntityGuids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetEntityGuids"></a>

```java
public void resetEntityGuids()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.alertPolicyIdsInput">alertPolicyIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.applicationIdsInput">applicationIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.entityGuidsInput">entityGuidsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.alertPolicyIds">alertPolicyIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.applicationIds">applicationIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.entityGuids">entityGuids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `alertPolicyIdsInput`<sup>Optional</sup> <a name="alertPolicyIdsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.alertPolicyIdsInput"></a>

```java
public java.util.List<java.lang.String> getAlertPolicyIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.apiKeyInput"></a>

```java
public java.lang.String getApiKeyInput();
```

- *Type:* java.lang.String

---

##### `applicationIdsInput`<sup>Optional</sup> <a name="applicationIdsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.applicationIdsInput"></a>

```java
public java.util.List<java.lang.String> getApplicationIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `entityGuidsInput`<sup>Optional</sup> <a name="entityGuidsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.entityGuidsInput"></a>

```java
public java.util.List<java.lang.String> getEntityGuidsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `alertPolicyIds`<sup>Required</sup> <a name="alertPolicyIds" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.alertPolicyIds"></a>

```java
public java.util.List<java.lang.String> getAlertPolicyIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `applicationIds`<sup>Required</sup> <a name="applicationIds" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.applicationIds"></a>

```java
public java.util.List<java.lang.String> getApplicationIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `entityGuids`<sup>Required</sup> <a name="entityGuids" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.entityGuids"></a>

```java
public java.util.List<java.lang.String> getEntityGuids();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a>

---


### DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference;

new DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.putApiKey">putApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKey` <a name="putApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.putApiKey"></a>

```java
public void putApiKey(DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a>

---

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.resetApiKey"></a>

```java
public void resetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.apiKey"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference getApiKey();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference</a>

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.apiKeyInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey getApiKeyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference;

new DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resetAuthorizationConfig">resetAuthorizationConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.putAuthorizationConfig"></a>

```java
public void putAuthorizationConfig(DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a>

---

##### `resetAuthorizationConfig` <a name="resetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.resetAuthorizationConfig"></a>

```java
public void resetAuthorizationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.authorizationConfig"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference getAuthorizationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.authorizationConfigInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig getAuthorizationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerNewRelic getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a>

---


### DevopsagentServiceServiceDetailsMcpServerOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerOutputReference;

new DevopsagentServiceServiceDetailsMcpServerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetAuthorizationConfig">resetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.putAuthorizationConfig"></a>

```java
public void putAuthorizationConfig(DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a>

---

##### `resetAuthorizationConfig` <a name="resetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetAuthorizationConfig"></a>

```java
public void resetAuthorizationConfig()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.authorizationConfig"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference getAuthorizationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.authorizationConfigInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig getAuthorizationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServer getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a>

---


### DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference;

new DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetCustomHeaders">resetCustomHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetMcpRoleArn">resetMcpRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomHeaders` <a name="resetCustomHeaders" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetCustomHeaders"></a>

```java
public void resetCustomHeaders()
```

##### `resetMcpRoleArn` <a name="resetMcpRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetMcpRoleArn"></a>

```java
public void resetMcpRoleArn()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetService` <a name="resetService" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.resetService"></a>

```java
public void resetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.customHeadersInput">customHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.mcpRoleArnInput">mcpRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.customHeaders">customHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.mcpRoleArn">mcpRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customHeadersInput`<sup>Optional</sup> <a name="customHeadersInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.customHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mcpRoleArnInput`<sup>Optional</sup> <a name="mcpRoleArnInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.mcpRoleArnInput"></a>

```java
public java.lang.String getMcpRoleArnInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `customHeaders`<sup>Required</sup> <a name="customHeaders" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.customHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mcpRoleArn`<sup>Required</sup> <a name="mcpRoleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.mcpRoleArn"></a>

```java
public java.lang.String getMcpRoleArn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference <a name="DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference;

new DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetAuthorizationConfig">resetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.putAuthorizationConfig"></a>

```java
public void putAuthorizationConfig(DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a>

---

##### `resetAuthorizationConfig` <a name="resetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetAuthorizationConfig"></a>

```java
public void resetAuthorizationConfig()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.authorizationConfig"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference getAuthorizationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.authorizationConfigInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig getAuthorizationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerSigV4 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a>

---


### DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference;

new DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader">resetAuthorizationHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetTokenName">resetTokenName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetTokenValue">resetTokenValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationHeader` <a name="resetAuthorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetAuthorizationHeader"></a>

```java
public void resetAuthorizationHeader()
```

##### `resetTokenName` <a name="resetTokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetTokenName"></a>

```java
public void resetTokenName()
```

##### `resetTokenValue` <a name="resetTokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.resetTokenValue"></a>

```java
public void resetTokenValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput">authorizationHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput">tokenNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput">tokenValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader">authorizationHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenName">tokenName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenValue">tokenValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationHeaderInput`<sup>Optional</sup> <a name="authorizationHeaderInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.authorizationHeaderInput"></a>

```java
public java.lang.String getAuthorizationHeaderInput();
```

- *Type:* java.lang.String

---

##### `tokenNameInput`<sup>Optional</sup> <a name="tokenNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenNameInput"></a>

```java
public java.lang.String getTokenNameInput();
```

- *Type:* java.lang.String

---

##### `tokenValueInput`<sup>Optional</sup> <a name="tokenValueInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenValueInput"></a>

```java
public java.lang.String getTokenValueInput();
```

- *Type:* java.lang.String

---

##### `authorizationHeader`<sup>Required</sup> <a name="authorizationHeader" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.authorizationHeader"></a>

```java
public java.lang.String getAuthorizationHeader();
```

- *Type:* java.lang.String

---

##### `tokenName`<sup>Required</sup> <a name="tokenName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenName"></a>

```java
public java.lang.String getTokenName();
```

- *Type:* java.lang.String

---

##### `tokenValue`<sup>Required</sup> <a name="tokenValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.tokenValue"></a>

```java
public java.lang.String getTokenValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a>

---


### DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference;

new DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.putBearerToken">putBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resetBearerToken">resetBearerToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBearerToken` <a name="putBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.putBearerToken"></a>

```java
public void putBearerToken(DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.putBearerToken.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a>

---

##### `resetBearerToken` <a name="resetBearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.resetBearerToken"></a>

```java
public void resetBearerToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.bearerToken">bearerToken</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.bearerTokenInput">bearerTokenInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bearerToken`<sup>Required</sup> <a name="bearerToken" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.bearerToken"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference getBearerToken();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference</a>

---

##### `bearerTokenInput`<sup>Optional</sup> <a name="bearerTokenInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.bearerTokenInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken getBearerTokenInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference <a name="DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference;

new DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetAuthorizationConfig">resetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.putAuthorizationConfig"></a>

```java
public void putAuthorizationConfig(DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a>

---

##### `resetAuthorizationConfig` <a name="resetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetAuthorizationConfig"></a>

```java
public void resetAuthorizationConfig()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.authorizationConfig"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference getAuthorizationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.authorizationConfigInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig getAuthorizationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig">DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerSplunk getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a>

---


### DevopsagentServiceServiceDetailsOutputReference <a name="DevopsagentServiceServiceDetailsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsOutputReference;

new DevopsagentServiceServiceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putAzureIdentity">putAzureIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putDynatrace">putDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putGitLab">putGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServer">putMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerGrafana">putMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerNewRelic">putMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSigV4">putMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSplunk">putMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putPagerDuty">putPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putServiceNow">putServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetAzureIdentity">resetAzureIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetDynatrace">resetDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetGitLab">resetGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServer">resetMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerGrafana">resetMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerNewRelic">resetMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerSigV4">resetMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerSplunk">resetMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetPagerDuty">resetPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetServiceNow">resetServiceNow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureIdentity` <a name="putAzureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putAzureIdentity"></a>

```java
public void putAzureIdentity(DevopsagentServiceServiceDetailsAzureIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putAzureIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a>

---

##### `putDynatrace` <a name="putDynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putDynatrace"></a>

```java
public void putDynatrace(DevopsagentServiceServiceDetailsDynatrace value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putDynatrace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a>

---

##### `putGitLab` <a name="putGitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putGitLab"></a>

```java
public void putGitLab(DevopsagentServiceServiceDetailsGitLab value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putGitLab.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a>

---

##### `putMcpServer` <a name="putMcpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServer"></a>

```java
public void putMcpServer(DevopsagentServiceServiceDetailsMcpServer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a>

---

##### `putMcpServerGrafana` <a name="putMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerGrafana"></a>

```java
public void putMcpServerGrafana(DevopsagentServiceServiceDetailsMcpServerGrafana value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerGrafana.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a>

---

##### `putMcpServerNewRelic` <a name="putMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerNewRelic"></a>

```java
public void putMcpServerNewRelic(DevopsagentServiceServiceDetailsMcpServerNewRelic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerNewRelic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a>

---

##### `putMcpServerSigV4` <a name="putMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSigV4"></a>

```java
public void putMcpServerSigV4(DevopsagentServiceServiceDetailsMcpServerSigV4 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSigV4.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a>

---

##### `putMcpServerSplunk` <a name="putMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSplunk"></a>

```java
public void putMcpServerSplunk(DevopsagentServiceServiceDetailsMcpServerSplunk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putMcpServerSplunk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a>

---

##### `putPagerDuty` <a name="putPagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putPagerDuty"></a>

```java
public void putPagerDuty(DevopsagentServiceServiceDetailsPagerDuty value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putPagerDuty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a>

---

##### `putServiceNow` <a name="putServiceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putServiceNow"></a>

```java
public void putServiceNow(DevopsagentServiceServiceDetailsServiceNow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a>

---

##### `resetAzureIdentity` <a name="resetAzureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetAzureIdentity"></a>

```java
public void resetAzureIdentity()
```

##### `resetDynatrace` <a name="resetDynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetDynatrace"></a>

```java
public void resetDynatrace()
```

##### `resetGitLab` <a name="resetGitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetGitLab"></a>

```java
public void resetGitLab()
```

##### `resetMcpServer` <a name="resetMcpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServer"></a>

```java
public void resetMcpServer()
```

##### `resetMcpServerGrafana` <a name="resetMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerGrafana"></a>

```java
public void resetMcpServerGrafana()
```

##### `resetMcpServerNewRelic` <a name="resetMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerNewRelic"></a>

```java
public void resetMcpServerNewRelic()
```

##### `resetMcpServerSigV4` <a name="resetMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerSigV4"></a>

```java
public void resetMcpServerSigV4()
```

##### `resetMcpServerSplunk` <a name="resetMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetMcpServerSplunk"></a>

```java
public void resetMcpServerSplunk()
```

##### `resetPagerDuty` <a name="resetPagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetPagerDuty"></a>

```java
public void resetPagerDuty()
```

##### `resetServiceNow` <a name="resetServiceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.resetServiceNow"></a>

```java
public void resetServiceNow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.azureIdentity">azureIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference">DevopsagentServiceServiceDetailsAzureIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.dynatrace">dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference">DevopsagentServiceServiceDetailsDynatraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.gitLab">gitLab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference">DevopsagentServiceServiceDetailsGitLabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServer">mcpServer</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference">DevopsagentServiceServiceDetailsMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerGrafana">mcpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerNewRelic">mcpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSigV4">mcpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference">DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSplunk">mcpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.pagerDuty">pagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference">DevopsagentServiceServiceDetailsPagerDutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference">DevopsagentServiceServiceDetailsServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.azureIdentityInput">azureIdentityInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.dynatraceInput">dynatraceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.gitLabInput">gitLabInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerGrafanaInput">mcpServerGrafanaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerInput">mcpServerInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerNewRelicInput">mcpServerNewRelicInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSigV4Input">mcpServerSigV4Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSplunkInput">mcpServerSplunkInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.pagerDutyInput">pagerDutyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.serviceNowInput">serviceNowInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureIdentity`<sup>Required</sup> <a name="azureIdentity" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.azureIdentity"></a>

```java
public DevopsagentServiceServiceDetailsAzureIdentityOutputReference getAzureIdentity();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentityOutputReference">DevopsagentServiceServiceDetailsAzureIdentityOutputReference</a>

---

##### `dynatrace`<sup>Required</sup> <a name="dynatrace" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.dynatrace"></a>

```java
public DevopsagentServiceServiceDetailsDynatraceOutputReference getDynatrace();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatraceOutputReference">DevopsagentServiceServiceDetailsDynatraceOutputReference</a>

---

##### `gitLab`<sup>Required</sup> <a name="gitLab" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.gitLab"></a>

```java
public DevopsagentServiceServiceDetailsGitLabOutputReference getGitLab();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLabOutputReference">DevopsagentServiceServiceDetailsGitLabOutputReference</a>

---

##### `mcpServer`<sup>Required</sup> <a name="mcpServer" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServer"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerOutputReference getMcpServer();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerOutputReference">DevopsagentServiceServiceDetailsMcpServerOutputReference</a>

---

##### `mcpServerGrafana`<sup>Required</sup> <a name="mcpServerGrafana" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerGrafana"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference getMcpServerGrafana();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference">DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference</a>

---

##### `mcpServerNewRelic`<sup>Required</sup> <a name="mcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerNewRelic"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference getMcpServerNewRelic();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference">DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference</a>

---

##### `mcpServerSigV4`<sup>Required</sup> <a name="mcpServerSigV4" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSigV4"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference getMcpServerSigV4();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference">DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference</a>

---

##### `mcpServerSplunk`<sup>Required</sup> <a name="mcpServerSplunk" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSplunk"></a>

```java
public DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference getMcpServerSplunk();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference">DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference</a>

---

##### `pagerDuty`<sup>Required</sup> <a name="pagerDuty" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.pagerDuty"></a>

```java
public DevopsagentServiceServiceDetailsPagerDutyOutputReference getPagerDuty();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference">DevopsagentServiceServiceDetailsPagerDutyOutputReference</a>

---

##### `serviceNow`<sup>Required</sup> <a name="serviceNow" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.serviceNow"></a>

```java
public DevopsagentServiceServiceDetailsServiceNowOutputReference getServiceNow();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference">DevopsagentServiceServiceDetailsServiceNowOutputReference</a>

---

##### `azureIdentityInput`<sup>Optional</sup> <a name="azureIdentityInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.azureIdentityInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsAzureIdentity getAzureIdentityInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsAzureIdentity">DevopsagentServiceServiceDetailsAzureIdentity</a>

---

##### `dynatraceInput`<sup>Optional</sup> <a name="dynatraceInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.dynatraceInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsDynatrace getDynatraceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsDynatrace">DevopsagentServiceServiceDetailsDynatrace</a>

---

##### `gitLabInput`<sup>Optional</sup> <a name="gitLabInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.gitLabInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsGitLab getGitLabInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsGitLab">DevopsagentServiceServiceDetailsGitLab</a>

---

##### `mcpServerGrafanaInput`<sup>Optional</sup> <a name="mcpServerGrafanaInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerGrafanaInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerGrafana getMcpServerGrafanaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerGrafana">DevopsagentServiceServiceDetailsMcpServerGrafana</a>

---

##### `mcpServerInput`<sup>Optional</sup> <a name="mcpServerInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServer getMcpServerInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServer">DevopsagentServiceServiceDetailsMcpServer</a>

---

##### `mcpServerNewRelicInput`<sup>Optional</sup> <a name="mcpServerNewRelicInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerNewRelicInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerNewRelic getMcpServerNewRelicInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerNewRelic">DevopsagentServiceServiceDetailsMcpServerNewRelic</a>

---

##### `mcpServerSigV4Input`<sup>Optional</sup> <a name="mcpServerSigV4Input" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSigV4Input"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerSigV4 getMcpServerSigV4Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSigV4">DevopsagentServiceServiceDetailsMcpServerSigV4</a>

---

##### `mcpServerSplunkInput`<sup>Optional</sup> <a name="mcpServerSplunkInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.mcpServerSplunkInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsMcpServerSplunk getMcpServerSplunkInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsMcpServerSplunk">DevopsagentServiceServiceDetailsMcpServerSplunk</a>

---

##### `pagerDutyInput`<sup>Optional</sup> <a name="pagerDutyInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.pagerDutyInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsPagerDuty getPagerDutyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a>

---

##### `serviceNowInput`<sup>Optional</sup> <a name="serviceNowInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.serviceNowInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsServiceNow getServiceNowInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetails">DevopsagentServiceServiceDetails</a>

---


### DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference;

new DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName">resetClientName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters">resetExchangeParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientName` <a name="resetClientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName"></a>

```java
public void resetClientName()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetExchangeParameters` <a name="resetExchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters"></a>

```java
public void resetExchangeParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput">clientNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput">exchangeParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">clientName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">exchangeParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientNameInput`<sup>Optional</sup> <a name="clientNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput"></a>

```java
public java.lang.String getClientNameInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `exchangeParametersInput`<sup>Optional</sup> <a name="exchangeParametersInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput"></a>

```java
public java.lang.String getExchangeParametersInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientName`<sup>Required</sup> <a name="clientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```java
public java.lang.String getClientName();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `exchangeParameters`<sup>Required</sup> <a name="exchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```java
public java.lang.String getExchangeParameters();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a>

---


### DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference;

new DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.putOAuthClientCredentials">putOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resetOAuthClientCredentials">resetOAuthClientCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOAuthClientCredentials` <a name="putOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.putOAuthClientCredentials"></a>

```java
public void putOAuthClientCredentials(DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a>

---

##### `resetOAuthClientCredentials` <a name="resetOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.resetOAuthClientCredentials"></a>

```java
public void resetOAuthClientCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.oAuthClientCredentials">oAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput">oAuthClientCredentialsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `oAuthClientCredentials`<sup>Required</sup> <a name="oAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```java
public DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference getOAuthClientCredentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `oAuthClientCredentialsInput`<sup>Optional</sup> <a name="oAuthClientCredentialsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials getOAuthClientCredentialsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsPagerDutyOutputReference <a name="DevopsagentServiceServiceDetailsPagerDutyOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsPagerDutyOutputReference;

new DevopsagentServiceServiceDetailsPagerDutyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resetAuthorizationConfig">resetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.putAuthorizationConfig"></a>

```java
public void putAuthorizationConfig(DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a>

---

##### `resetAuthorizationConfig` <a name="resetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resetAuthorizationConfig"></a>

```java
public void resetAuthorizationConfig()
```

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.resetScopes"></a>

```java
public void resetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.authorizationConfig"></a>

```java
public DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference getAuthorizationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.authorizationConfigInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig getAuthorizationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig">DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig</a>

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDutyOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsPagerDuty getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsPagerDuty">DevopsagentServiceServiceDetailsPagerDuty</a>

---


### DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference <a name="DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference;

new DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName">resetClientName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters">resetExchangeParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientName` <a name="resetClientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientName"></a>

```java
public void resetClientName()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetExchangeParameters` <a name="resetExchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.resetExchangeParameters"></a>

```java
public void resetExchangeParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput">clientNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput">exchangeParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName">clientName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters">exchangeParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientNameInput`<sup>Optional</sup> <a name="clientNameInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientNameInput"></a>

```java
public java.lang.String getClientNameInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `exchangeParametersInput`<sup>Optional</sup> <a name="exchangeParametersInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParametersInput"></a>

```java
public java.lang.String getExchangeParametersInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientName`<sup>Required</sup> <a name="clientName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientName"></a>

```java
public java.lang.String getClientName();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `exchangeParameters`<sup>Required</sup> <a name="exchangeParameters" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.exchangeParameters"></a>

```java
public java.lang.String getExchangeParameters();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a>

---


### DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference <a name="DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference;

new DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.putOAuthClientCredentials">putOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resetOAuthClientCredentials">resetOAuthClientCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOAuthClientCredentials` <a name="putOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.putOAuthClientCredentials"></a>

```java
public void putOAuthClientCredentials(DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.putOAuthClientCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a>

---

##### `resetOAuthClientCredentials` <a name="resetOAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.resetOAuthClientCredentials"></a>

```java
public void resetOAuthClientCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.oAuthClientCredentials">oAuthClientCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput">oAuthClientCredentialsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `oAuthClientCredentials`<sup>Required</sup> <a name="oAuthClientCredentials" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.oAuthClientCredentials"></a>

```java
public DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference getOAuthClientCredentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference</a>

---

##### `oAuthClientCredentialsInput`<sup>Optional</sup> <a name="oAuthClientCredentialsInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.oAuthClientCredentialsInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials getOAuthClientCredentialsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a>

---


### DevopsagentServiceServiceDetailsServiceNowOutputReference <a name="DevopsagentServiceServiceDetailsServiceNowOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceServiceDetailsServiceNowOutputReference;

new DevopsagentServiceServiceDetailsServiceNowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resetAuthorizationConfig">resetAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resetInstanceUrl">resetInstanceUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.putAuthorizationConfig"></a>

```java
public void putAuthorizationConfig(DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a>

---

##### `resetAuthorizationConfig` <a name="resetAuthorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resetAuthorizationConfig"></a>

```java
public void resetAuthorizationConfig()
```

##### `resetInstanceUrl` <a name="resetInstanceUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.resetInstanceUrl"></a>

```java
public void resetInstanceUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.instanceUrlInput">instanceUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.instanceUrl">instanceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.authorizationConfig"></a>

```java
public DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference getAuthorizationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.authorizationConfigInput"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig getAuthorizationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig">DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig</a>

---

##### `instanceUrlInput`<sup>Optional</sup> <a name="instanceUrlInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.instanceUrlInput"></a>

```java
public java.lang.String getInstanceUrlInput();
```

- *Type:* java.lang.String

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.instanceUrl"></a>

```java
public java.lang.String getInstanceUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNowOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceServiceDetailsServiceNow getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceServiceDetailsServiceNow">DevopsagentServiceServiceDetailsServiceNow</a>

---


### DevopsagentServiceTagsList <a name="DevopsagentServiceTagsList" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceTagsList;

new DevopsagentServiceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.get"></a>

```java
public DevopsagentServiceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DevopsagentServiceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>>

---


### DevopsagentServiceTagsOutputReference <a name="DevopsagentServiceTagsOutputReference" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_service.DevopsagentServiceTagsOutputReference;

new DevopsagentServiceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentServiceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentService.DevopsagentServiceTags">DevopsagentServiceTags</a>

---



